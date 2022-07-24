import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="##">
                    <img src={process.env.PUBLIC_URL + "jay-sardar-logo.png"} alt="" width="45" height="40" />
                    <img src={process.env.PUBLIC_URL + "jay-sardar-logo-name.png"} alt="" width="175" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-bar" aria-controls="nav-bar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-bar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active menu-item" aria-current="page" href="##">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-item" aria-current="page" href="##">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-item" aria-current="page" href="##">What we offer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;