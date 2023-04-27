import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg NavbarCom shadow">
                <div className="container-fluid justify-content-between">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedConten">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link active" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
