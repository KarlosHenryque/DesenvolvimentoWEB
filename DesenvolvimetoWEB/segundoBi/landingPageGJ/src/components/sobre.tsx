import fotoSobre from "../assets/image/fotoSobre.jpg";
import "../style/sobre.css";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__container">
        <div className="sobre__image">
          <img src={fotoSobre} alt="Foto sobre mim" />
        </div>

        <div className="sobre__content">
          <span className="sobre__subtitle">Sobre Mim</span>

          <h2>
            Transformando ideias em experiências visuais
            <br />
            com identidade e propósito.
          </h2>

          <div className="sobre__text">
            <p>
              “Sempre achei que a vida imitava a arte, até perceber que a
              própria vida já é arte.”
            </p>

            <p>
              Há mais de 7 anos atuo como criador audiovisual e fotógrafo,
              transformando referências, histórias e experiências em conteúdos
              que conectam pessoas e fortalecem marcas.
            </p>

            <p>
              Estou me graduando em Publicidade e Propaganda no Centro
              Universitário FAG e levo criatividade, estratégia e sensibilidade
              para cada projeto que desenvolvo.
            </p>

            <p>
              Mais do que produzir imagens ou vídeos, meu objetivo é transmitir
              essência, criar conexões reais e ajudar marcas e pessoas a se
              posicionarem com autenticidade no digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
