import React, { memo } from 'react'

export default memo(function Navigation({changePath}) {

  const add_remove = () => {
    let sideMenu = document.querySelector('#hori-translate-nav');
    let mainMenu = document.querySelector('#vert-translate-nav')
    sideMenu.classList.contains('nav-left')
      ? sideMenu.classList.remove('nav-left')
      : sideMenu.classList.add('nav-left')

    mainMenu.classList.contains('nav-up')
      ? setTimeout(() => {
        mainMenu.classList.remove('nav-up')
      }, 500)
      : mainMenu.classList.add('nav-up')
  }
  function handleClick(e) {
    changePath(e)
    add_remove()
  }

  return(
    <>   
      <div className='' id='vert-translate-nav'>
        <button onClick={handleClick} value='/about'>About</button>
        <button onClick={handleClick} value='/projects'>Projects</button>
        <button onClick={handleClick} value='/contact'>Contact</button>
        <button onClick={handleClick} value='/resume'>Resume</button>        
      </div>
      <div id='portfolio-nav'>
        <div className='nav-left' id='hori-translate-nav'>
          <button onClick={handleClick} value='/'>Home</button>
          <button onClick={changePath} value='/about'>About</button>
          <button onClick={changePath} value='/projects'>Projects</button>
          <button onClick={changePath} value='/contact'>Contact</button>
          <button onClick={changePath} value='/resume'>Resume</button>        
        </div>
      </div>
    </>
  )
})