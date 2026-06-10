import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  nome: string;
  email: string;
  assunto: string;
  message: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin ?? "";

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Método não permitido.",
      }),
    };
  }

  let payload: ContactPayload;

  try {
    console.log("event.body:", event.body);

    payload = JSON.parse(event.body ?? "{}");

    console.log("payload:", payload);
  } catch (error) {
    console.error("Erro ao converter JSON:", error);

    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Body inválido.",
      }),
    };
  }

  const { nome, email, assunto, message } = payload

  if (!nome?.trim() || !email?.trim() || !assunto?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Campos obrigatórios: nome, email, assunto e message.",
      }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "E-mail inválido.",
      }),
    };
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_EMAIL,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_EMAIL
  ) {
    console.error("Configuração SMTP incompleta.");

    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Configuração SMTP incompleta.",
      }),
    };
  }

  const safeMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
  from: `Landing Page <${SMTP_USER}>`,
  replyTo: email,
  to: CONTACT_EMAIL,

  subject: `[Gabriel José] ${assunto}`,

  text: `
    Nome: ${nome}
    E-mail: ${email}
    Assunto: ${assunto}

    Mensagem:
    ${message}
      `,

      html: `
        <h2>Nova mensagem de contato</h2>

        <p>
          <strong>Nome:</strong>
          ${nome}
        </p>

        <p>
          <strong>E-mail:</strong>
          ${email}
        </p>

        <p>
          <strong>Assunto:</strong>
          ${assunto}
        </p>

        <p>
          <strong>Mensagem:</strong>
        </p>

        <p>${safeMessage}</p>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        message: "E-mail enviado com sucesso.",
      }),
    };
  } catch (error) {
    console.error("Erro SMTP:", error);

    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error:
          "Falha ao enviar o e-mail. Tente novamente mais tarde.",
      }),
    };
  }
};

export { handler };