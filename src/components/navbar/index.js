import React from "react";
import "./style.css"

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className="navbar yellow accent-4">
                <div className="nav-wrapper">
                    <a href="#" class="brand-logo Left">Simpsons Clicky Game!</a>
                    <a href="#" class="brand-logo center">Click an image to begin!</a>
                    <a href="#" class="brand-logo right">Score: 0 | Top Score: 0</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;