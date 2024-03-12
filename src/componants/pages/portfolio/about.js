import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
    if(props.old == true) {
      document.querySelector('#portfolio-about').classList.remove('body-down')
      setTimeout(() => {
        document.querySelector('#portfolio-about').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-about').classList.remove('body-down')
      }, 10);      
    }

  })

  return(
    <div className='body-down' id='portfolio-about'>
      <p>This is a simple paragraph about myself, and my good qualities. just gotta make it a bit longer so that the text wraps and I get a good sample</p>
    </div>
  )
}