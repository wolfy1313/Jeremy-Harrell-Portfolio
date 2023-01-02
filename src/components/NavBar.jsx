import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {

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
    <Navbar fixed="top" bg="dark" expand="lg" variant='dark'>
      {/* <Container> */}
        <Navbar.Brand href="#home">Jeremy Harrell <span>Software Engineer</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className="justify-content-end">
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link onClick={handleClick}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
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