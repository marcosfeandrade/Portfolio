/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './sobre.css';
import Foto from '../../../assets/eu.jpg';

function Sobre() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-top-apresentation">
          <h2 className="about-welcome" id="welcome">Olá, bem vindo(a) ao meu portfólio!</h2>
          <br/>
          <span className="about-name" id="welcome"> Meu nome é <span>Marcos Andrade</span>.</span>
          <br/>
          <span className="about-info">
            Eu sou:
            <ul>
            <li>Desenvolvedor Full Stack 👨‍💻</li>
            <li>Bacharelando em Ciência da Computação - UNICAP 👨‍🎓</li>
            <li>Aluno pesquisador - PIBIC 🔎</li>
            </ul>
          </span>
        </div>

        <div className="about-photo">
          <img src={Foto} className="picture"/>
        </div>

        
      </div>
      <div className="about-bottom">
        <h2>Sobre mim</h2>
        <div className="about-me">
          <p>
            Meu nome é Marcos, tenho 19 anos. Sou bacharelando em Ciência da Computação na 
            Universidade Católica de Pernambuco (UNICAP). Desde meus 3 anos eu tenho contato
            com tecnologia (naquela época, através de um Mega Drive da minha irmã). Com 7 anos, 
            ganhei meu primeiro computador e um ano após ganha-lo, conheci o Minecraft, 
            explorando mais do jogo entrei na comunidade de mods, esse foi o meu primeiro 
            contato com programação. No 9º ano do EF, foi me ensinado HTML, a partir desse momento 
            decidi que queria cursar algo na área de computação. Até que em 2020 iniciei 
            Ciência da Computação. No terceiro período eu começei a buscar mais conhecimentos 
            necessários para o mercado, então de uma forma não guiada, fui estudando tanto 
            back-end, quanto front-end e desde então, busco conhecimentos nos dois campos.
            </p>
        </div>
      </div>

    </div>
    
  );

}

export default Sobre;