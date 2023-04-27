import React, { useState } from 'react'
import './NavbarCom.css'
import navLogo from '../../assets/mainlogo1.png'

export default function NavbarCom() {
    return (
        <nav className="navbar navbar-expand-lg NavbarCom">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand" href="#"><img className='logo-icon' src={navLogo} alt='Nav-logo' /></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedConten">
                    <span className="navbar-toggler-icon" >
                        <div className="menu-button">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedConten">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 NavbarComElements">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btnas BuyNow " type="submit">Buy now</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
