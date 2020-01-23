import React from "react";
import Navbar from "../navbar";
import "./style.css";

function Header(props){
    return (
        <header className="header" {...props}> 
            <Navbar />
        </header>
    );
}

export default Header;