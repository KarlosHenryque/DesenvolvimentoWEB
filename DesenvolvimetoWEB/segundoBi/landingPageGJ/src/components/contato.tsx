import { useState } from "react";
import Swal from "sweetalert2";

import "../style/contato.css";

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  message: string;
};

export default function Contato() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    assunto: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Enviando...",
        text: "Aguarde um momento",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: data.error || "Tente novamente mais tarde.",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Mensagem enviada!",
        text: data.message || "Recebemos sua mensagem.",
        confirmButtonText: "OK",
        confirmButtonColor: "#c96a4a",
      });

      setForm({
        nome: "",
        email: "",
        assunto: "",
        message: "",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro inesperado",
        text: "Não foi possível enviar sua mensagem.",
        confirmButtonText: "OK",
        confirmButtonColor: "#c96a4a",
      });
    }
  }

  return (
    <section className="contato" id="contato">
      <div className="contato__container">
        <div className="contato__info">
          <span>CONTATO</span>

          <h2>Vamos conversar sobre seu próximo projeto.</h2>

          <p>
            Estou disponível para ensaios fotográficos, produções
            audiovisuais, cobertura de eventos e projetos criativos.
          </p>

          <div className="contato__dados">
            <div>
              <h3>Email</h3>
              <p>egab.jose@gmail.com</p>
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p>(45) 9121-1073</p>
            </div>

            <div>
              <h3>Localização</h3>
              <p>Cascavel - PR</p>
            </div>
          </div>
        </div>

        <form className="contato__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="assunto"
            placeholder="Assunto"
            value={form.assunto}
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Conte um pouco sobre o seu projeto..."
            value={form.message}
            required
            onChange={handleChange}
          />

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}