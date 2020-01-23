import React from "react";
import Score from "../score";
import "./style.css"


function Navbar(props) {
    return (
        <div className="navbar-fixed">
            <nav className="navbar yellow accent-4">
                <div className="nav-wrapper">
                    <div class="brand-logo Left">Simpsons Clicky Game!</div>
                    <div class="brand-logo center">Click an image to begin!</div>
                    <Score 
                        total={props.score}
                        goal={8}
                        status={props.status}
                    />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;