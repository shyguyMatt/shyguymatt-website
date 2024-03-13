import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-resume-body').classList.remove('body-down')
      document.querySelector('#portfolio-resume-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-resume').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-resume-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-resume-header').classList.remove('header-up')
      }, 1000); 
    }
  })

  return(
    <div id='portfolio-resume'>
      <div className='header-up' id='portfolio-resume-header'>

      </div>
      <div className='body-down' id='portfolio-resume-body'>
        <h2>This is a sample resume</h2>
        <p>Matthew Herford</p>
        <p>248-245-6890</p>
      </div>
    </div>
  )
}