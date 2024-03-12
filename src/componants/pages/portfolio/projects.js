import React, { useEffect } from 'react'

const projects = [
  {
    title: 'project 1',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 2',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 3',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 4',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 5',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 6',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 7',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 8',
    desc: 'short description',
    links: ['github', 'deployed']
  },
  {
    title: 'project 9',
    desc: 'short description',
    links: ['github', 'deployed']
  }
]

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-projects').classList.remove('body-down')
      setTimeout(() => {
        document.querySelector('#portfolio-projects').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-projects').classList.remove('body-down')
      }, 10);      
    }
  })

  return(
    <div className='body-down' id='portfolio-projects'>
      {projects.map((project) => {
        return(
          <div className='project-card' key={project.title}>
            <h5>{project.title}</h5>
            <p>{project.desc}</p>
            <ul>
              {project.links.map((link) => {
                return(
                  <li key={link}>{link}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}