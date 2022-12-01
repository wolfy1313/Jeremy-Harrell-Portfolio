import React from 'react'
import NavBar from './NavBar'

const About = () => {
  return (
    <div className='app'>
        <div className='aboutMeMain'>
          <h1 className='pageName'>ABOUT ME</h1>
          <div className='aboutMeContainer'>
            <section className='aboutColumn aboutColumnA'>
              <img className='profilePic' src=''/>
            </section>
            <section className='aboutColumn'>
              <p id='aboutMeText'>
              I am a software developer with a passion for creativity and functionality who brings experience that spans the hospitality, start-up, and e-commerce industries. As an operations and people manager of a team of 25, I have a proven track record in solving problems and trouble shooting on the fly, and understand the importance of planning ahead and effective communication. I would like to use my skills to be a part of a creative, solutions-oriented team that works hard and has fun doing it.
              </p>
            </section>
          </div>

      </div>
    </div>
  )
}

export default About