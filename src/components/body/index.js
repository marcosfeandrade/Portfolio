import React from 'react'
import "./body.css";
import Sobre from "./sobre/index";
import Projetos from "./projetos/index";
import Habilidades from "./habilidades/index";
import Contato from './contato/index';


function Body() {
  return (
    <div className="body">
      <section id="about">
        <Sobre/>
      </section>

      <section id="skills">
        <Habilidades/>
      </section>

      <section id="project">
        <Projetos/>
      </section>

      <section id="contact">
        <Contato/>
      </section>
    </div>
  )
}

export default Body;