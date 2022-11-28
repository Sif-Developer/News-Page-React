import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"



const Header = () => {
    return(
        <nav className="header">
            <span>HumanityNEWS</span>
            <div>
                <span>
                    <Link to="/home">Home </Link>
                </span>
                <span>
                    <Link to="/form">Form </Link>
                </span>
                <span>
                    <Link to="/list">List </Link>
                </span>
            </div>
        </nav>
    )
}

export default Header