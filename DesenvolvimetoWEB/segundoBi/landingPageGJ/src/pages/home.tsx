import Header from "../components/header";
import Sobre from "../components/sobre";
import Especialidades from "../components/especialidades";
import Portifolio from "../components/portifolio";
import Planos from "../components/planos";
import Contato from "../components/contato";
import Footer from "../components/footer";

import FotoPerfil from "../assets/image/fotoPerfil.jpg";

import "../style/hero.css";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <article className="hero__text">
            <header>
              <span className="hero__subtitle">
                Produtor audiovisual e fotógrafo.
              </span>

              <h1 id="hero-title">Posicionando sua marca com autenticidade</h1>
            </header>

            <p>
              Combinamos sensibilidade arquitetônica com direção criativa de
              alta fidelidade para entregar sistemas visuais que constroem
              credibilidade duradoura para profissionais e empresas.
            </p>

            <nav className="hero__actions" aria-label="Ações principais">
              <a href="#planos" className="btn btn-primary">
                Ver Planos
              </a>

              <a href="#contato" className="btn btn-secondary">
                Inicie Seu Projeto
              </a>
            </nav>
          </article>

          <span className="hero__image">
            <img src={FotoPerfil} alt="Foto" />
          </span>
        </div>
      </section>

      <Sobre />
      <Especialidades />
      <Portifolio />
      <Planos />
      <Contato />
      <Footer />
    </div>
  );
}
