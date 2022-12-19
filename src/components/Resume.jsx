import React from 'react'
import JeremyHarrellSEIResumePNG from '../assets/JeremyHarrellSEResumePNG.png'

const Resume = () => {


  return (
    <div className='portfolioHome'>
      <h1 className='pageTitle'>Resume</h1>
      <img src={JeremyHarrellSEIResumePNG} alt="pdf of resume for jeremy harrell"/>
      <h2 className='myTitle'>Junior Software Engineer</h2>
    </div>
  )
}

export default Resume