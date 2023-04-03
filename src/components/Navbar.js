import React from "react";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className ="navigationbar">
            <div className ="button1">
            <button> </button>
            </div>
            <div className ="linkto">
                <Link to ="/"> Home </Link>
                <Link to ="/projects"> Projects </Link>
                <Link to ="/experience"> Experience </Link>
                <Link to ="/contact"> Contact </Link>
            </div>
        </div>
    );
}

export default Navbar;