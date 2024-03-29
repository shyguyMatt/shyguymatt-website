import React, { useEffect } from 'react'

const projects = [
  {
    title: 'Flashcards PWA',
    desc: 'A simple app for creating and displaying flashcards used for studying. Built using firebase and firestore for authentication and databases.',
    links: ['https://github.com/shyguyMatt/flashcard-pwa', 'https://flashcards-26a5d.web.app/']
  },
  {
    title: 'Portfolio',
    desc: 'A Static webpage built with React for showing off myself and my skills.',
    links: ['https://github.com/shyguyMatt/shyguymatt-website', 'https://portfolio.shyguymatt.com/']
  }
]

export default function Projects(props) {
  useEffect(() => {
    if(props.old == true) {
      document.querySelector('#portfolio-projects-body').classList.remove('body-down')
      document.querySelector('#portfolio-projects-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-projects').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-projects-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-projects-header').classList.remove('header-up')
      }, 1000);     
    }
  })

  return(
    <div id='portfolio-projects'>
      <div className='header-up' id='portfolio-projects-header'>
        <h1>Projects</h1>
      </div>
      <div className='body-down' id='portfolio-projects-body'>
        {projects.map((project) => {
          return(
            <div className='project-card' key={project.title}>
              <h5>{project.title}</h5>
              <p>{project.desc}</p>
              <ul>
                {project.links.map((link) => {
                  return(
                    <li key={link}><a href={link}>{link}</a></li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <div className='spacer'></div>
      </div>
    </div>
  )
}