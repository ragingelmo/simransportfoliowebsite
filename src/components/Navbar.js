import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className ="navigationbar">
            <div className ="button1">
            <button> </button>
            </div>
            <div className ="linkto">
                <Link to ="/"> Home </Link>
                <Link to ="/"> Home </Link>
            </div>
        </div>
    );
}

export default Navbar;