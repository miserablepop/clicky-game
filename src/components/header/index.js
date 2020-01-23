import React from "react";

function Header(props){
    return (
        <header className="header" {...props}> 
            <div className="navbar-fixed">
                <nav className="navbar yellow accent-4">
                    <div className="nav-wrapper">
                        <div className="brand-logo Left">Simpsons Clicky Game!</div>
                        <div className="brand-logo center">{props.status}</div>
                        <div className="brand-logo right">Score: {props.total}</div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;