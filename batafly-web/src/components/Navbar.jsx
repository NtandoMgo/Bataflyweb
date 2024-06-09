import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import './Navbar.css'
{/* */}
const Navbar = () => {
  return (
    <div className='container'>
        <div className='header-wrapper'>
            {/* logo */}
            <div className='header-logo'>
                <div className='logo'>
                    <Link to={"/"}> <img src={logo} alt="Batafly" /></Link>
                </div>
            </div>

            <div className='menu-area'>
                <div className='menu'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/thoughts">Our Thoughts</Link></li>
                        <li><Link to="/services">What We Do</Link></li>
                        <li><Link to="/about">Who We Are</Link></li>
                        <li><Link to="/contact">Lets Talk</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='navbar-line'></div>
    </div>
    
  )
}

export default Navbar
