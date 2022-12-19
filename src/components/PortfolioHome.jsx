import React from 'react'
import JeremyHarrellPhoto from '../assets/JeremyHarrellPhoto.png'
import FrontendSkillsNew from '../assets/FrontendSkillsNew.png'
import BackendSkills from '../assets/BackendSkills.png'
import { Link } from 'react-router-dom'

const PortfolioHome = () => {
  return (
    <div className='portfolioHomeMain'>
      <div className='portfolioHome1'>
        <div className='homeJeremyPic'>
          <img src={JeremyHarrellPhoto}/>
        </div>
        <div className='homeInfo'>
          <h1 className='myTitle text-4xl font-bold'>Jeremy Harrell</h1>
          <h1 className='myTitle text-3xl font-bold'>Junior Software Developer</h1>
          <p className='myPersonalInfo text-xl font-light'> Hi, I'm Jeremy Harrell. I am an Austin, Texas based junior software developer. I enjoy working on projects and learning new things.</p>
          <Link to='/about' className='text-2xl font-bold underline'>
          More About Me
        </Link>
        </div>
      </div>
      <div className='portfolioHome2'>
        <div className='homeFrontEndSkills'>
          <img src={FrontendSkillsNew}/>
        </div>
        <div className='homeBackEndSkills'>
          <img src={BackendSkills}/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHome
