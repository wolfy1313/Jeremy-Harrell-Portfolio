import React from 'react'
import GithubIconSmallTransparent from '../assets/GithubIconSmallTransparent.png'
import linkedInLogoSmallTransparentBackground from '../assets/linkedInLogoSmallTransparentBackground.png'
import { Stack, Image, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer className='page-footer font-small pt-4'>
    <Navbar bg='dark' expand="lg" variant='dark' className='justify-content-center'>
      <Nav>
          <Stack direction='horizontal' gap={2}>
            <Nav.Link href='https://github.com/wolfy1313'>
              <Image className='center' src={GithubIconSmallTransparent} thumbnail roundedCircle style={{ display: "flex", width: 50}}></Image>
            </Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/jeremy-harrell-softwareengineer/'>
              <Image className='center' src={linkedInLogoSmallTransparentBackground} thumbnail style={{ display: "flex", width: 50}}></Image>
            </Nav.Link>
          </Stack>
      </Nav>
    </Navbar>
    </footer>
  )
}

export default Footer