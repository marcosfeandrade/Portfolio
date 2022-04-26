import React from 'react';
import "./web.css";
import { BiBrain, BiListUl, BiPhone } from "react-icons/bi";

function Web() {
  return (
    <div className="web">

      <div className="web-option">
        <a href="#skills"><p class="option-icon"><BiBrain/></p> Habilidades</a>
      </div>

      <div className="web-option">
        <a href="#project"><p class="option-icon"><BiListUl/></p> Projetos</a>
      </div>

      <div className="web-option">
        <a href="#contact"><p class="option-icon"><BiPhone/></p> Contatos</a>
      </div>
    </div>
  )
}

export default Web;