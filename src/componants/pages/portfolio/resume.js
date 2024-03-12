import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-resume').classList.remove('body-down')
      setTimeout(() => {
        document.querySelector('#portfolio-resume').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-resume').classList.remove('body-down')
      }, 10);      
    }
  })

  return(
    <div className='body-down' id='portfolio-resume'>
      <h2>This is a sample resume</h2>
      <p>Matthew Herford</p>
      <p>248-245-6890</p>
    </div>
  )
}