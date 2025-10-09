import React from "react";
import Navigation from "../Components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>POUR PLUS DE DÉTAILS, CONTACTEZ-MOI</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>D.R. CONGO</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="+243972455320">
                <span
                  className="clikInput"
                  onClick={() => alert("Téléphone copié !")}
                >
                  +243972455320
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="systemeservice@gmail.com">
                <span
                  className="clikInput"
                  onClick={() => alert("E-mail copié !")}
                >
                  systemeservice@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>LinkedIn</h4>
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Github</h4>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Twitter</h4>
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>CodePen</h4>
            <i className="fab fa-codepen"></i>
          </a>
          <a
            href="https://t.me/ton_nom_utilisateur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Telegram</h4>
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://wa.me/243972455320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>WhatsApp</h4>
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.tiktok.com/@ton_nom_utilisateur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>TikTok</h4>
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
