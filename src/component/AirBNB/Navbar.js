import React from "react"
import logo from '../../images/AirBNB/airbnb-logo.png'
export default function Navbar() {
    return (
        <nav className="airbnbNav">
            <img src={logo} className="navLogo" alt="navImg" />
        </nav>
    )
}