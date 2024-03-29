import React, { useEffect } from 'react'

import resume from './../../../assets/resources/resume.pdf'

export default function Projects(props) {
  useEffect(() => {
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
        <h1>Resume</h1>
      </div>
      <div className='body-down' id='portfolio-resume-body'>
        <div id='resume-header'>
          <h1>Matthew Herford</h1>
          <p>Lansing, Michigan</p>
          <p>Phone: 248-245-6890</p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/matthew-herford-58682826b/'>https://www.linkedin.com/in/matthew-herford-58682826b/</a></p>
          <p>GitHub: <a href='https://github.com/shyguymatt'>https://github.com/shyguymatt</a> | Portfolio: <a href='portfolio.shyguymatt.com'>portfolio.shyguymatt.com</a></p>     
        </div>
        <div id='resume-summary'>
          <h2>Summary</h2>
          <p>Results-driven and creative Full Stack Web Developer with over 2 years of hands-on experience in web development. Proficient in JavaScript, CSS, HTML, and a range of cutting-edge technologies including React, MongoDB, Express, and Node. Adept at translating innovative ideas into fully functional applications. Demonstrated ability to meet and exceed project deadlines, coupled with a strong commitment to continuous learning. Excited about leveraging my technical skills and problem-solving abilities to contribute effectively to the team.</p>
        </div>
        <div id='resume-skills'>
          <h2>Technical Skills</h2>
          <ul>
            <li>Programming languages: JavaScript - Advanced, Python - Basic, C# - Intermediate</li>
            <li>Web Technologies: HTML5 - Intermediate, CSS3 - Intermediate, Bootstrap - Basic, GraphQL - Intermediate</li>
            <li>Database Management: MySQL - Intermediate, MongoDB - Advanced</li>
            <li>Frameworks & Libraries: React - Advanced, Express - Intermediate, Node.js - Advanced, Handlebars - Intermediate</li>
            <li>Version Control: GitHub - Advanced</li>
          </ul>
        </div>
        <div id='resume-experiance'>
          <h2>Experience</h2>
          <p>Car Wash Associate | Sparkle Buggy | Burton, Center Rd | 2020-2023</p>
          <h3>Summary</h3>
          <p>As a Car Wash Associate at Sparkle Buggy, I demonstrated effective leadership and decision-making skills as the designated Shift Lead. In this role, I was responsible for overseeing daily schedules for a team of 4-6 individuals. My primary duties included managing workflow efficiency, ensuring timely completion of tasks, and maintaining a positive customer experience.</p>
          <h3>Key Accomplishments</h3>
          <ul>
            <li>
              <p>Staffing Management</p>
              <ul>
                <li>Held a pivotal role in optimizing staffing levels by making timely decisions to call in additional help when necessary or strategically sending team members home during peak or low demand periods.</li>
                <li>Successfully balanced workforce resources, contributing to enhanced operational efficiency and cost-effectiveness.</li>
              </ul>
            </li>
            <li>
              <p>Leadeship & Communication</p>
              <ul>
                <li>Orchestrated seamless communication among team members, fostering a collaborative work environment.</li>
                <li>Utilized effective leadership strategies to address challenges and maintain a harmonious atmosphere during high-pressure situations.</li>
              </ul>
            </li>
            <li>
              <p>Customer Service & Safety</p>
              <ul>
                <li>Implemented safety protocols when working with heavy machinery, ensuring a secure environment for both team members and customers.</li>
                <li>Demonstrated commitment to exceptional customer service by handling customer concerns and inquiries with professionalism and efficiency.</li>
              </ul>
            </li>
            <li>
              <p>Performance Recognition</p>
              <ul>
                <li>Received positive feedback and recognition for adaptability and decision-making skills, with indications of eligibility for promotion if not for academic commitments.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='resume-education'>
          <h2>Education</h2>
          <h3>Full Stack Web Development Bootcamp</h3>
          <p>Michigan State University, Lansing MI</p>
          <ul>
            <li>Completed an intensive and comprehensive Full Stack Web Development Bootcamp, gaining expertise in front-end and back-end technologies.</li>
            <li>Acquired hands-on experience in web development, including but not limited to JavaScript, React, MongoDB, Express, Node.js, and database management.</li>
            <li>Successfully completed challenging projects that demonstrated problem-solving skills, creativity, and the ability to work in a collaborative coding environment.</li>
            <li>Engaged in continuous learning and exploration of emerging technologies in the web development field.</li>
          </ul>
        </div>
        <div id='resume-references'>
          <h2>References</h2>
          <h3>Peter Boling</h3>
          <p>Bootcamp Instructor</p>
          <p>Michigan State University</p>
          <p>Phone: 925-252-5351</p>
          <p>Peter Boling served as my instructor during the Full Stack Web Development Bootcamp at Michigan State University. With over 10 years of experience in the field, Peter guided me through the complexities of web development, offering valuable insights and mentorship. He can provide insight into my technical capabilities, problem-solving skills, and collaborative work ethic.</p>
        </div>
        <div className='spacer'></div>
      </div>
    </div>
  )
}