import { useState } from "react";

import Logo from "../assets/image/logo.svg";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";

import "../style/header.css";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <img src={Logo} alt="Logo" className="logo" />

        <nav className="desktop-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="desktop-actions">
          <button className="btn-primary">Solicitar orçamento</button>
        </div>

        <button
          className="menu-button"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <img src={showMobileMenu ? Close : Menu} alt="Menu" />
        </button>

        <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="#home" onClick={() => setShowMobileMenu(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#sobre" onClick={() => setShowMobileMenu(false)}>
                  Sobre
                </a>
              </li>

              <li>
                <a href="#portfolio" onClick={() => setShowMobileMenu(false)}>
                  Portfólio
                </a>
              </li>

              <li>
                <a href="#planos" onClick={() => setShowMobileMenu(false)}>
                  Planos
                </a>
              </li>

              <li>
                <a href="#contato" onClick={() => setShowMobileMenu(false)}>
                  Contato
                </a>
              </li>
            </ul>

            <div className="mobile-actions">
              <button className="btn-primary">Solicitar orçamento</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
