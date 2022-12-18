import React from 'react'
import NavBar from './NavBar'
import GithubIconSmallTransparent from '../assets/GithubIconSmallTransparent.png'
import linkedInLogoSmallTransparentBackground from '../assets/linkedInLogoSmallTransparentBackground.png'

const About = () => {
  return (
    <div className='app'>
        <div className='aboutMeMain'>
          <h1 className='pageName font-extrabold text-xl'>ABOUT ME</h1>
          <div className='aboutMeContainer'>
            <div className='aboutColumn'>
              <p id='aboutMeText'>
              I am a software developer with a passion for creativity and functionality who brings experience that spans the hospitality, start-up, and e-commerce industries. As an operations and people manager of a team of 25, I have a proven track record in solving problems and trouble shooting on the fly, and understand the importance of planning ahead and effective communication. I would like to use my skills to be a part of a creative, solutions-oriented team that works hard and has fun doing it.
              </p>
            </div>
            <div className='icons'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/wolfy1313" className='text-xl font-bold'><img className='icon-pic' src={GithubIconSmallTransparent}/>Github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeremy-harrell-softwareengineer/" className='text-xl font-bold'><img className='icon-pic' src={linkedInLogoSmallTransparentBackground}/>linkedIn</a>
            </div>
          </div>

      </div>
    </div>
  )
}

export default About