import React, { useState } from 'react'

import './style.scss'
import Navigation from './nav'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Resume from './resume'

let oldPathname = '/'

export default function Portfolio() {

  const [pathname, setPathname] = useState(window.location.pathname)

  function changePath(e) {
    oldPathname = pathname
    setPathname(e.target.value)
  }

  return(
    <div id='portfolio-root'>
      <div id='inner-page'>
        <header>
          {/* <h1>Matthew Herford</h1>
          <h2>Developer</h2> */}
        </header>
        <Navigation changePath={changePath}/>
        <div>
          {pathname === '/about' && <About old={false} />}
          {pathname === '/projects' && <Projects old={false} />}
          {pathname === '/contact' && <Contact old={false} />}
          {pathname === '/resume' && <Resume old={false} />}

          {oldPathname === '/about' && <About old={true} />}
          {oldPathname === '/projects' &&  <Projects old={true} />}
          {oldPathname === '/contact' && <Contact old={true} />}
          {oldPathname === '/resume' && <Resume old={true} />}
        </div>
      </div>
    </div>
  )
}