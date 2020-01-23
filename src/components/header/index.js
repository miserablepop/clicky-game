import React from "react";

function Header(props){
    return (
        <header className="header" {...props}> 
            <div className="navbar-fixed">
                <nav className="navbar yellow accent-4">
                    <div className="nav-wrapper">
                        <div class="brand-logo Left">Simpsons Clicky Game!</div>
                        <div class="brand-logo center">{props.status}</div>
                        <div class="brand-logo right">Score: {props.total}</div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;