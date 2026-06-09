import "../style/contato.css";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Formulário enviado");
  };

  return (
    <section className="contato" id="contato">
      <div className="contato__container">
        <div className="contato__info">
          <span>CONTATO</span>

          <h2>Vamos conversar sobre seu próximo projeto.</h2>

          <p>
            Estou disponível para ensaios fotográficos, produções audiovisuais,
            cobertura de eventos e projetos criativos. Entre em contato e
            solicite um orçamento.
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
          <input type="text" placeholder="Seu nome" required />

          <input type="email" placeholder="Seu e-mail" required />

          <input type="text" placeholder="Assunto" required />

          <textarea
            rows={6}
            placeholder="Conte um pouco sobre o seu projeto..."
            required
          />

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
