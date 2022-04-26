import React from 'react';
import "./contato.css"
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

function Contato() {
  return (
    <div className="contacts">
      <h2>Contato</h2>
      <div className="both">
        <div className="direct">
          <span className="direct-text">Direto</span>
          <ul className="direct-links">
            <li id="whatsapp"><a href="https://wa.me/5581995064913?text=Ol%C3%A1%21" target="_blank" rel="noreferrer"><SiWhatsapp/></a></li>
            <li id="gmail"><a href="mailto:marcos.fellipe2211@gmail.com" target="_blank" rel="noreferrer"><SiGmail/></a></li>
          </ul>
        </div>
        <div className="social">
        <span className="social-text">Social</span>
          <ul className="social-links">
            <li id="linkedin"><a href="https://www.linkedin.com/in/marcos-andrade-3a0643207/" target="_blank" rel="noreferrer"><SiLinkedin/></a></li>
            <li id="github"><a href="https://github.com/marcosfandrade" target="_blank" rel="noreferrer"><SiGithub/></a></li>
            <li id="instagram"><a href="https://www.instagram.com/marcos_fellipe.a/" target="_blank" rel="noreferrer"><SiInstagram/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contato;