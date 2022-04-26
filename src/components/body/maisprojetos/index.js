import React from 'react'
import { useEffect, useState } from 'react';
import { GoRepoForked, GoStar, GoEye } from "react-icons/go";

function MaisProjetos() {
  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/marcosfandrade/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])
  return (
    <div className="more-projects-repositories">
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
  )
}

export default MaisProjetos;