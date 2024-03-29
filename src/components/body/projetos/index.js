import React from 'react';
import "./projetos.css";
import { GoRepoForked, GoStar, GoEye } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from 'react';



function Projetos() {

  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/marcosfandrade/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <div className="projects">
      <div className="projects-header">
        <h2>
          Projetos
        </h2>
        <br/>
        <div className="link-cv-div">
        <a className="link-cv" href="https://drive.google.com/drive/folders/1UAht616Nv45MXPhcskkK6wNIol44IYL4?usp=sharing" target="_blank" rel="noreferrer">
          Link CV
        </a>
        </div>
        <div className="more-projects">
      <ul>
        { repositories.map(repository => {
          return (
            <li>
              <p class="repository-name">{repository.name}</p>
              <p class="repository-description">{repository.description}</p>
              <a href={repository.html_url} target="_blank" rel="noreferrer" class="repository-link">Link</a>
              <div className="info-icons">
              <p class="repository-watches"><GoEye/> {repository.watchers_count}</p>
              <p class="repository-fork"><GoRepoForked/> {repository.forks_count}</p>
              <p class="repository-star"><GoStar/> {repository.stargazers_count}</p>
              </div>
            </li>
          );
        }) }
      </ul>
    </div>
      </div>
    </div>
  )
}

export default Projetos;