import React, { useEffect } from 'react'

const projects = [
  {
    title: 'EchoSphere',
    desc: 'A social networking platform centered around shared interests and echo chambers, fostering meaningful connections within specialized communities.',
    links: ['github', 'deployed']
  },
  {
    title: 'PixelPulse',
    desc: 'An interactive web application that generates dynamic pixel art based on user input, offering a creative outlet for digital artists and enthusiasts.',
    links: ['github', 'deployed']
  },
  {
    title: 'QuantumScape',
    desc: 'A quantum computing simulation tool designed to visualize complex algorithms and facilitate experimentation in the realm of quantum mechanics.',
    links: ['github', 'deployed']
  },
  {
    title: 'DreamForge',
    desc: 'A collaborative project management platform that empowers teams to transform creative ideas into tangible realities through streamlined workflows and intuitive task management.',
    links: ['github', 'deployed']
  },
  {
    title: 'CodeCrafter',
    desc: 'A coding education platform offering interactive tutorials and real-world coding challenges, empowering learners to master programming languages and frameworks.',
    links: ['github', 'deployed']
  },
  {
    title: 'NexusNova',
    desc: 'A decentralized marketplace powered by blockchain technology, connecting buyers and sellers globally while ensuring secure and transparent transactions.',
    links: ['github', 'deployed']
  },
  {
    title: 'TechTrove',
    desc: 'A curated collection of tech resources and tools for developers, designers, and technology enthusiasts, providing a one-stop destination for staying updated and informed.',
    links: ['github', 'deployed']
  },
  {
    title: 'MysticMaze',
    desc: 'An immersive virtual reality game set in a mysterious labyrinth, challenging players to navigate through puzzles and uncover hidden secrets.',
    links: ['github', 'deployed']
  },
  {
    title: 'DataDynamo',
    desc: 'A data analytics platform equipped with advanced visualization tools and predictive modeling capabilities, enabling businesses to extract actionable insights from their datasets with ease.',
    links: ['github', 'deployed']
  }
]

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
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
                    <li key={link}><a href=''>{link}</a></li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}