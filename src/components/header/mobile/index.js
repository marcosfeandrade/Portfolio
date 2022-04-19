import React from 'react';
import "./mobile.css";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick = {()=> setIsOpen(!isOpen)}>
        <p>I</p>
      </div>

      <div className="mobile-options">

        <div className="mobile-option">
          <a href="#project"><p class="option-icon">P</p> Projetos</a>
        </div>

        <div className="mobile-option">
          <a href="#skills"><p class="option-icon">E</p> Experiencias</a>
        </div>

        <div className="mobile-option">
          <a href="#work"><p class="option-icon">T</p> Trabalhos</a>
        </div>

        <div className="mobile-option">
          <a href="#contact"><p class="option-icon">C</p> Contatos</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;