import React, { useEffect } from 'react'
import portrait from './../../../assets/images/me.PNG'

export default function Projects(props) {
  useEffect(() => {
    console.log(props.old)
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
        <p>Welcome to my corner of the internet! I'm Matthew, a passionate web developer based in Michigan. With 1.5 years of experience under my belt, I specialize in crafting immersive web experiences using React JavaScript, HTML, and CSS.</p>
        <h2>My Expertise</h2>
        <p>My journey into the world of web development began with a fascination for creating digital landscapes that seamlessly blend functionality with aesthetics. I thrive on the challenge of bringing ideas to life through clean, efficient code and intuitive user interfaces. Alongside my proficiency in front-end technologies, I possess a solid understanding of databases such as MongoDB and MySQL, ensuring robust backend functionality to complement the user-facing aspects of a project.</p>
        <h2>Beyond Coding</h2>
        <p>When I'm not immersed in lines of code, you'll often find me buried in the pages of a captivating fantasy novel. Reading has always been my escape into other worlds, sparking creativity and inspiring new perspectives that I bring into my development work.</p>
        <p>I'm also an avid gamer, finding joy in exploring virtual realms and solving intricate puzzles. Whether it's unraveling the mysteries of a fantastical RPG or mastering the mechanics of a strategic multiplayer game, I relish the challenge and camaraderie that gaming brings.</p>
        <p>At home, I enjoy tinkering with my server setup, constantly seeking to optimize performance and experiment with new technologies. It's my personal sandbox where I can push the boundaries of what's possible and indulge my curiosity for all things tech.</p>
        <h2>Personal Touch</h2>
        <p>Quiet and inquisitive by nature, I approach both my work and life with a sense of curiosity and thoughtfulness. Every project is an opportunity to learn and grow, and I'm committed to delivering solutions that not only meet but exceed expectations.</p>
        <h2>Let's Connect</h2>
        <p>Whether you're looking to collaborate on a project, discuss the latest fantasy novels, or simply geek out over technology, I'd love to connect. Feel free to reach out, and let's embark on an exciting journey together!</p>
      </div>
    </div>
  )
}