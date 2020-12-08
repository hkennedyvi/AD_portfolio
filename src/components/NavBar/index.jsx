import React from 'react';
import './navbar.scss';

function NavBar () {
    return (
        <div className="navbar">
          <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/work" className="nav-link">
                            <span className="link-text">WORK</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/bio" className="nav-link">
                            <span className="link-text">BIO</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <span className="link-text">RESUME</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            <span className="link-text">CONTACT</span>
                        </a>
                    </li>
                </ul>
        </div>
    )
};

export default NavBar;