import casamento from "../assets/image/casamento.png";
import casal from "../assets/image/casal.jpg";
import esporte from "../assets/image/esporte.png";
import "../style/portifolio.css";

export default function Portifolio() {
  return (
    <section id="portfolio" className="portifolio">
      <div className="portifolio__header">
        <span>Portfólio</span>
        <h2>Meus Trabalhos</h2>
      </div>

      <div className="portifolio__grid">
        <div className="portifolio__card">
          <img src={casamento} alt="Ensaio de casamento" />
          <div className="portifolio__content">
            <h3>Ensaio de casamento</h3>
          </div>
        </div>

        <div className="portifolio__card">
          <img src={casal} alt="Ensaio de casais" />
          <div className="portifolio__content">
            <h3>Ensaio de casais</h3>
          </div>
        </div>

        <div className="portifolio__card">
          <img src={esporte} alt="Ensaio esportivo" />
          <div className="portifolio__content">
            <h3>Ensaio Esportivo</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
