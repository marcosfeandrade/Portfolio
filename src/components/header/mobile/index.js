import React from 'react';
import "./mobile.css";
import { BiBrain, BiListUl, BiPhone } from "react-icons/bi";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick = {()=> setIsOpen(!isOpen)}>
        <p>X</p>
      </div>

      <div className="mobile-options">

      <div className="mobile-option">
        <a href="#skills"><p class="option-icon"><BiBrain/></p> Habilidades</a>
      </div>

      <div className="mobile-option">
        <a href="#project"><p class="option-icon"><BiListUl/></p> Projetos</a>
      </div>

      <div className="mobile-option">
        <a href="#contact"><p class="option-icon"><BiPhone/></p> Contatos</a>
      </div>

      </div>
    </div>
  );
}

export default Mobile;