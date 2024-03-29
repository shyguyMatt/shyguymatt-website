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
      <Navigation changePath={changePath}/>
      <div id='inner-page'>
        <div>
          {pathname === '/about' && <About old={false} changePath={changePath} />}
          {pathname === '/projects' && <Projects old={false} changePath={changePath} />}
          {pathname === '/contact' && <Contact old={false} changePath={changePath} />}
          {pathname === '/resume' && <Resume old={false} changePath={changePath} />}

          {oldPathname === '/about' && <About old={true} changePath={changePath} />}
          {oldPathname === '/projects' &&  <Projects old={true} changePath={changePath} />}
          {oldPathname === '/contact' && <Contact old={true} changePath={changePath} />}
          {oldPathname === '/resume' && <Resume old={true} changePath={changePath} />}
        </div>
      </div>
    </div>
  )
}