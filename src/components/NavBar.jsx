import React from 'react'
// import Nav from 'react-bootstrap/Nav';
import { Navbar, Image } from 'react-bootstrap';
import JeremyPhotoNoText from '../assets/JeremyPhotoNoText.png'

const NavBar = () => {

  // const handleClick = () => {
  //   fetch('JeremyHarrellUpdatedResume.pdf').then(response => {
  //     response.blob().then(blob => {
  //       const fileURL = window.URL.createObjectURL(blob)
  //       let alink = document.createElement('a');
  //       alink.href = fileURL;
  //       alink.download = 'JeremyHarrellUpdatedResume.pdf';
  //       alink.click()
  //     })
  //   })
  // }


  return (
    <header>
      <Navbar bg="dark" expand="lg" variant='dark'id='header' >
        {/* <Container> */}
          {/* <Navbar.Brand href="/" ><h1>Jeremy Harrell</h1> <h5 className='title'>Software Engineer</h5></Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar id="basic-navbar-nav"className="justify-content-end">
            {/* <Nav >
              <Nav.Link href="/projects">Projects</Nav.Link> */}
              {/* <Nav.Link href="/projects-copy">ProjectsCopy</Nav.Link> */}
              {/* <Nav.Link onClick={handleClick}>Resume</Nav.Link>
            </Nav> */}
            <Image className="navImage" id='navImage' src={JeremyPhotoNoText} alt="man staring at camera" roundedCircle></Image>
          </Navbar>
        {/* </Container> */}
      </Navbar>
    </header>
  );
}

export default NavBar

// <div>
// <div className='navMain'>
//   <Link to='/' className='text-3xl font-bold underline'>
//     Home
//   </Link>
//   <Link to='/projects' className='text-3xl font-bold underline'>
//     Projects
//   </Link>
//   <Link to='/about' className='text-3xl font-bold underline'>
//     About
//   </Link>
//   <Link to='/resume' className='text-3xl font-bold underline'>
//     Resume
//   </Link>
// </div>
// </div>