import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-contact-body').classList.remove('body-down')
      document.querySelector('#portfolio-contact-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-contact').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-contact-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-contact-header').classList.remove('header-up')
      }, 1000);      
    }
  })

  return(
    <div id='portfolio-contact'>
      <div className='header-up' id='portfolio-contact-header'>
        <h1>Contact Me</h1>
      </div>
      <div className='body-down' id='portfolio-contact-body'>
        <p>you can reach me at any of these places. email would probably be the best place to reach me</p>
        <ul>
          <li>Email: mjherford@gmail.com</li>
          <li>Phone: 248-245-6890</li>
          <li>LinkedIn: Matthew Herford</li>
        </ul>
      </div>
    </div>
  )
}