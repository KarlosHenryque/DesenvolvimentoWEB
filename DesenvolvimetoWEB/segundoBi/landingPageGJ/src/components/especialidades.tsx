import "../style/especialidades.css";

import photo_camera from "../assets/icons/photo_camera.svg";
import videocam from "../assets/icons/videocam.svg";
import palette from "../assets/icons/palette.svg";
import edicao from "../assets/icons/edicao.svg";

export default function Especialidades() {
  return (
    <section className="especialidades">
      <div className="especialidades__header">
        <span>Especialidades</span>

        <h2>Disciplinas Criativas & Técnicas</h2>

        <p>
          Produções visuais pensadas para fortalecer marcas com autenticidade,
          direção e identidade.
        </p>
      </div>

      <div className="especialidades__carousel">
        <div className="especialidades__track">
          <article className="especialidade__card">
            <img src={videocam} alt="Produção Audiovisual" />
            <h3>Produção Audiovisual</h3>
            <p>
              Criação de vídeos institucionais, comerciais e conteúdos visuais
              estratégicos.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={photo_camera} alt="Fotografia" />
            <h3>Fotografia</h3>
            <p>
              Ensaios, retratos e fotografia comercial com direção estética e
              narrativa visual.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={palette} alt="Direção Criativa" />
            <h3>Direção Criativa</h3>
            <p>
              Desenvolvimento visual e conceitual para campanhas, marcas e
              presença digital.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={edicao} alt="Design Visual" />
            <h3>Design Visual</h3>
            <p>
              Identidade visual e peças criativas para fortalecer comunicação e
              posicionamento.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={videocam} alt="Produção Audiovisual" />
            <h3>Produção Audiovisual</h3>
            <p>
              Criação de vídeos institucionais, comerciais e conteúdos visuais
              estratégicos.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={photo_camera} alt="Fotografia" />
            <h3>Fotografia</h3>
            <p>
              Ensaios, retratos e fotografia comercial com direção estética e
              narrativa visual.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={palette} alt="Direção Criativa" />
            <h3>Direção Criativa</h3>
            <p>
              Desenvolvimento visual e conceitual para campanhas, marcas e
              presença digital.
            </p>
          </article>

          <article className="especialidade__card">
            <img src={edicao} alt="Design Visual" />
            <h3>Design Visual</h3>
            <p>
              Identidade visual e peças criativas para fortalecer comunicação e
              posicionamento.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
