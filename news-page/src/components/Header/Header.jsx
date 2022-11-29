import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"



const Header = () => {
    return(
        <nav className="header">
            <span>HumanityNEWS</span>
            <div className="header-nav">
                <span>
                    <Link to="/home" className="header-nav">Home </Link>
                </span>
                <span>
                    <Link to="/form" className="header-nav">Form </Link>
                </span>
                <span>
                    <Link to="/list" className="header-nav">List </Link>
                </span>
            </div>
        </nav>
    )
}

export default Header