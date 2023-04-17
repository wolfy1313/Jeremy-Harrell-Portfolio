import React from 'react'
import { Container } from 'react-bootstrap'

const PortfolioHome = () => {

  const handleClick = () => {
    fetch('JeremyHarrellUpdatedResumeNew.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'JeremyHarrellUpdatedResumeNew.pdf';
        alink.click()
      })
    })
  }

  return (
    <Container fluid="md">
      <h1 className='myPersonalInfo text-5xl font-light text-center mt-5' > Hi, I'm Jeremy Harrell.</h1> 
      <br/>
      <h4 className='text-center'>I am an Austin, Texas based junior software developer, musician and artist. I approach all aspects of my life with a passion for creativity and functionality.</h4>
      <br/>
      <h5>My professional experience spans the hospitality, start-up, and e-commerce industries. As an operations and people manager of a team of 25, I have a proven track record in solving problems and trouble shooting on the fly, and understand the importance of planning ahead and effective communication. I would like to use my skills to be a part of a creative, solutions-oriented team that works hard and has fun doing it.</h5>
      <br/>
      <h3 id='resumeLink'><a href='/' onClick={handleClick}>DOWNLOAD MY RESUMÉ</a></h3>
    </Container>
  )
}

export default PortfolioHome

