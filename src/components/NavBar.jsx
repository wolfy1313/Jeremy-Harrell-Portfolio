import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to='/' className='headerLink'>
          Home
        </Link>
        <Link to='/projects' className='headerLink'>
          Projects
        </Link>
        <Link to='/about' className='headerLink'>
          About
        </Link>
        <Link to='/resume' className='headerLink'>
          Resume
        </Link>
      </div>
    </div>
  )
}

export default NavBar