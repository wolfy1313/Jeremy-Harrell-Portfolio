import React from 'react'
import JeremyHarrellSEIResumePNG from '../assets/JeremyHarrellSEResumePNG.png'

const Resume = () => {
  const handleClick = () => {
    fetch('JeremyHarrellResume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'JeremyHarrellResume.pdf';
        alink.click()
      })
    })
  }


  return (
    <div className='portfolioHome'>
      <h1 className='pageTitle'>Resume</h1>
      <button onClick={handleClick}>Download PDF</button>
      <img src={JeremyHarrellSEIResumePNG} alt="pdf of resume for jeremy harrell"/>
      <h2 className='myTitle'>Junior Software Engineer</h2>
    </div>
  )
}

export default Resume