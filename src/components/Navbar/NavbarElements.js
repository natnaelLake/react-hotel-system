import React from 'react'
import { Link } from 'react-router-dom'


import './style.css'

function NavbarElements() {
  return (
    <div>
      <nav className='nav text-light'>
        <Link to="/" className='site-title'>
          Site Name
        </Link>
        <ul>
          <li className='active'>
            <Link to="/pricing">Pricing
            </Link>
          </li>
          <li>
            <Link to="/about">About
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us
            </Link>
          </li>
          <li>
            <Link to="/help">Help
            </Link>
          </li>
          <li>
            <Link to="/gallary">Gallary
            </Link>
          </li>
          <li>
            <Link to="/login">Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default NavbarElements