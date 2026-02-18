import "./Certifications.css";

import mongoIcon from "../icons/mongo.png";
import scrumIcon from "../icons/scrum.png";
import agileIcon from "../icons/agile.png";
import microsoftIcon from "../icons/microsoft.png";

function Certifications() {
  return (
    <section className="certifications">
      <div className="certifications-container">
        <p className="certifications-title">Certificações</p>

        <div className="certifications-logos">
          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <img src={mongoIcon} alt="MongoDB Certification" />
          </a>

          <a href="https://www.scrum.org/" target="_blank" rel="noopener noreferrer">
            <img src={scrumIcon} alt="Scrum Certification" />
          </a>

          <a href="https://www.agilealliance.org/" target="_blank" rel="noopener noreferrer">
            <img src={agileIcon} alt="Agile Certification" />
          </a>

          <a href="https://learn.microsoft.com/" target="_blank" rel="noopener noreferrer">
            <img src={microsoftIcon} alt="Microsoft Certification" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;