import React, { useEffect } from 'react'
import portrait from './../../../assets/images/me.PNG'

export default function Projects(props) {
  useEffect(() => {
    if(props.old == true) {
      document.querySelector('#portfolio-about-body').classList.remove('body-down')
      document.querySelector('#portfolio-about-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-about').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-about-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-about-header').classList.remove('header-up')
      }, 1000);      
    }

  })

  return(
    <div id='portfolio-about'>
      <div className='header-up' id='portfolio-about-header'>
        <img src={portrait}></img>
        <h1>About</h1>
      </div>
      <div className='body-down' id='portfolio-about-body'>
        <h2>About Me</h2>
        <p>Welcome to my corner of the internet! I'm Matthew Herford, a web developer based out of Lansing, Michigan. Quiet and reserved by nature, I find my voice through the code I write and the digital solutions I build. I have a passion for problem-solving and looking under the hood to find out how things tick. Which has led me down the road of web development.</p>
        <h2>Mantra</h2>
        <p>	A personal mantra of mine is “Never take broken for an answer”. It means to me that nothing that is broken is ever meaningless. There is always something to be learned. What went wrong? What went right? What can I take away for my next success? All of it is valuable information and I never want to look at something broken and not learn something from it.</p>
        <h2>Journey till now</h2>
        <p>Since an early age, I've been drawn to puzzles and challenges of all kinds. Whether it was solving logic puzzles or tinkering with gadgets, I've always had a knack for unraveling mysteries. This curiosity and a problem-solving mindset led me to pursue a career in web development.</p>
        <p>Flash forward to today and I have completed a full stack web development bootcamp hosted by Michigan State University. Where I was able to further hone my skills as a web developer and gain some real experience working with a team completing web applications from inception to deployment.</p>
        <p>I love web development because it's a field where there is always something to solve, always some new puzzle to figure out. It's a field where there is no roof to how much you can learn.</p>
        <h2>Let's Connect</h2>
        <p>	If you're looking for a passionate web developer with an unending desire to improve, look no further. Let's embark on a journey to create something extraordinary together!</p>
        <div className='spacer'></div>
      </div>
    </div>
  )
}