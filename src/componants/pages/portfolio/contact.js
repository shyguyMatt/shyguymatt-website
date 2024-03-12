import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-contact').classList.remove('body-down')
      setTimeout(() => {
        document.querySelector('#portfolio-contact').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-contact').classList.remove('body-down')
      }, 10);      
    }
  })

  return(
    <div className='body-down' id='portfolio-contact'>
      <p>you can reach me at any of these places. email would probably be the best place to reach me</p>
      <ul>
        <li>Email: mjherford@gmail.com</li>
        <li>Phone: 248-245-6890</li>
        <li>LinkedIn: Matthew Herford</li>
      </ul>
    </div>
  )
}