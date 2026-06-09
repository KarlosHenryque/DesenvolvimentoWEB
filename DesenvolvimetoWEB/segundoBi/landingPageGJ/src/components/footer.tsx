import "../style/footer.css";

import Instagram from "../assets/icons/instagram.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>Gabriel José</h2>

          <p>
            Fotógrafo e Criador Audiovisual. Transformando ideias em imagens que
            conectam, inspiram e geram resultados.
          </p>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/ogab.js?igsh=bmZ3dDducTgzdGps"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" />
            </a>

            <a
              href="https://wa.me/554591211073"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <img src={Whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Todos os direitos reservados a Gabriel José.</p>
      </div>
    </footer>
  );
}
