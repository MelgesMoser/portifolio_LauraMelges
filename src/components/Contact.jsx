import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-card">
        <div className="contact-column name-column">
          <h1>Laura Melges</h1>
        </div>

        <div className="contact-column info-column">
          <div className="contact-item">
            <strong>Email:</strong> melgesmoser.laura@gmail.com
          </div>
          <div className="contact-item">
            <strong>Telefone:</strong> +55 11 99246-1830
          </div>
        </div>

        <div className="contact-column links-column">
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/seu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/seu-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/seu-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div
          className="scroll-top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          ↑
        </div>
      </div>
    </div>
  );
};

export default Contact;