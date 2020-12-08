import React from 'react';
import './navbar.scss';

function NavBar () {
    return (
        <div className="navbar">
          <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            {/* <img src={FoodCartImage} alt="Home"/> */}
                            <span className="link-text">WORK</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/menu" className="nav-link">
                        {/* <img src={MenuImage} alt="Menu"/> */}
                            <span className="link-text">BIO</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/reservation" className="nav-link">
                            {/* <img src={DinnerTableImage} alt="Reservation"/> */}
                            <span className="link-text">RESUME</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            {/* <i className="fas fa-question" alt="About"></i> */}
                            <span className="link-text">CONTACT</span>
                        </a>
                    </li>
                </ul>
        </div>
    )
};

export default NavBar;