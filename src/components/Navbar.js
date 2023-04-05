import React, { useEffect, useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import "../pageStyles/Navbar.css";
import Reorder from "@mui/icons-material/Reorder";



function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    

    return (
        <div className ="navigationbar" id={expandNavbar ? "open" : "close"}> 
            <div className ="button1">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}

                >
                    <Reorder/>
                </button>
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