import React from 'react'
import "./habilidades.css"
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { SiJava, SiSpringboot } from "react-icons/si";
import { SiNodedotjs, SiMysql } from "react-icons/si";
import { SiGit, SiGithub } from "react-icons/si";


function Habilidades() {
  return (
    <div className="skills">
      <div className="skills-text">
        <h2>Habilidades</h2>
      </div>
      <ul className="skills-list">
        <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" id="html-skill"><SiHtml5/></a></li>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer" id="css-skill"><SiCss3/></a></li>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer" id="js-skill"><SiJavascript/></a></li>
        <li><a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" id="react-skill"><SiReact/></a></li>
        <li><a href="https://www.oracle.com/java/technologies/javase-documentation.html" target="_blank" rel="noreferrer" id="java-skill"><SiJava/></a></li>
        <li><a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" target="_blank" rel="noreferrer" id="spring-skill"><SiSpringboot/></a></li>
        <li><a href="https://nodejs.org/pt-br/docs/" target="_blank" rel="noreferrer" id="node-skill"><SiNodedotjs/></a></li>
        <li><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer" id="mysql-skill"><SiMysql/></a></li>
        <li><a href="https://git-scm.com/docs/git/pt_BR" target="_blank" rel="noreferrer" id="git-skill"><SiGit/></a></li>
        <li><a href="https://github.com/" target="_blank" rel="noreferrer" id="github-skill"><SiGithub/></a></li>
        </ul>
      </div>
  )
}

export default Habilidades;