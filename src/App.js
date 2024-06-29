import * as React from "react";
import "./index.css";

/**
  - Identifique os possíveis componentes que esta página pode ter
  - Crie componentes individuais para cada uma das seções identificadas
  e mova o conteúdo para cada um deles
  - Utilize os componentes nessa página para que ela fique com a mesma 
  aparência de antes
 */

export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <h1 className="nav-bar-title">Restaurante</h1>
        <p className="nav-bar-book">Encomendas e reserva de mesa</p>
        <button className="button">Entrar em contato</button>
      </nav>
      <div className="highlight">
        <h2>
          Integer egestas <br />
          <i>enim</i>.
        </h2>
      </div>
      <main className="about">
        <div className="about-left">
          <h2 className="about-title">
            What is <br />
            Lorem Ipsum?
          </h2>
          <button className="button">Reserve sua mesa</button>
        </div>
        <div className="about-right">
          <p className="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="about-text">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="about-text">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </main>
      <footer className="footer">
        <div>
          <p className="footer-section-title">Restaurante</p>
        </div>
        <div>
          <p className="footer-section-title">Localização</p>
          <p className="footer-section-content">Rua Ipsum, 22</p>
          <p className="footer-section-content">Aliquam id lacus diam</p>
          <p className="footer-section-content">Proin aliquam</p>
          <a className="footer-link" href="www.maps.google.com">
            Google maps
          </a>
        </div>
        <div>
          <p className="footer-section-title">Horário</p>
          <p className="footer-section-content">Seg - Sex: 11h - 23h</p>
          <p className="footer-section-content">Sáb - Dom: 11h - 22h</p>
          <a className="footer-link" href="www.reservas.com">
            Reserve sua mesa
          </a>
        </div>
        <div>
          <p className="footer-section-title">Contato</p>
          <p className="footer-section-content">Email</p>
          <p className="footer-section-content">lorem@ipsum.dolor</p>
          <button className="button button-white">Entrar em contato</button>
        </div>
      </footer>
    </div>
  );
}
