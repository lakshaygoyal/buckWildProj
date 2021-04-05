import React from 'react'
import {Link} from'react-router-dom'
import { Button } from './Button'
import logo from './abc_logo.svg';
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>

        <div className="navbar">
            <div className="navbar-container container">
                <div className=''>
                <ul className={ 'nav-menu'}>
                    <li style={{paddingBottom:'2vh', paddingTop:'2vh'}}>
                    <Link to='/' className="navbar-logo" >
                        <img src={logo} className="navbar-logo" alt="logo" />
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" >
                            Industries
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about-us' className="nav-links" >
                            About Us
                        </Link>
                    </li>
                </ul>
                    
                </div>

                <div className="" style={{ marginTop: '-97px'}}>
                    <Link to='/sign-up' className="btn-link" >
                        <Button buttonStyle ='btn--outline'>Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
