import React from 'react';
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project"><p class="option-icon">P</p> Projetos</a>
      </div>

      <div className="web-option">
        <a href="#skills"><p class="option-icon">E</p> Experiencias</a>
      </div>

      <div className="web-option">
        <a href="#works"><p class="option-icon">T</p> Trabalhos</a>
      </div>

      <div className="web-option">
        <a href="#contact"><p class="option-icon">C</p> Contatos</a>
      </div>
    </div>
  )
}

export default Web;