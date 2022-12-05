import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to='/' className='text-3xl font-bold underline'>
          Home
        </Link>
        <Link to='/projects' className='text-3xl font-bold underline'>
          Projects
        </Link>
        <Link to='/about' className='text-3xl font-bold underline'>
          About
        </Link>
        <Link to='/resume' className='text-3xl font-bold underline'>
          Resume
        </Link>
      </div>
    </div>
  )
}

export default NavBar