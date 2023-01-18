import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'

const PortfolioHome = () => {

  const handleClick = () => {
    fetch('JeremyHarrellUpdatedResume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'JeremyHarrellUpdatedResume.pdf';
        alink.click()
      })
    })
  }

  return (
    <Container fluid="md">
      <Row>
        <Stack direction="horizontal" gap={2}>
          {/* <Image className="float-left mt-5 mb-5"src={JeremyPhotoNoText} alt="man staring at camera" rounded style={{ display: "flex", width:500, padding: 30,}}></Image> */}
            <Col><h1 className='myPersonalInfo text-5xl font-light text-center mt-5' > Hi, I'm Jeremy Harrell.</h1> 
            <h4>I am an Austin, Texas based junior software developer, musician and artist. I approach all aspects of my life with a passion for creativity and functionality.</h4>
              <h5>My professional experience spans the hospitality, start-up, and e-commerce industries. As an operations and people manager of a team of 25, I have a proven track record in solving problems and trouble shooting on the fly, and understand the importance of planning ahead and effective communication. I would like to use my skills to be a part of a creative, solutions-oriented team that works hard and has fun doing it.</h5>
              <h3 id='resumeLink'><a href='/' onClick={handleClick}>DOWNLOAD MY RESUMÉ</a></h3>
              </Col>
        </Stack>
      </Row>
      {/* <Row>
        <Stack direction="horizontal" gap={3}>
            <Link to='/about' className='text-2xl font-bold underline mb-5'>
            More About Me
          </Link>
        </Stack>
      </Row> */}
    </Container>
  )
}

export default PortfolioHome

//choose fonts that work
