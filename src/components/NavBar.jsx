import React from 'react'
import { Navbar, Image } from 'react-bootstrap';
import JeremyPhotoNoText from '../assets/JeremyPhotoNoText.png'

const NavBar = () => {


  return (
    <header>
      <Navbar bg="dark" expand="lg" variant='dark'id='header' >
          <Navbar id="basic-navbar-nav"className="justify-content-end">
            <Image className="navImage" id='navImage' src={JeremyPhotoNoText} alt="man staring at camera" roundedCircle></Image>
          </Navbar>
      </Navbar>
    </header>
  );
}

export default NavBar