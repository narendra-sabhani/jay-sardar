import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + "img/jay-sardar-logo.png"} alt="" width="50" height="40" />
                    <img src={process.env.PUBLIC_URL + "img/jay-sardar-txt.png"} alt="" width="175" height="40" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-bar" aria-controls="nav-bar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-bar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active menu-item" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active menu-item" aria-current="page" to="/About">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu-item" aria-current="page" to="/Contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;