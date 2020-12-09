import React from 'react';
import Image from './painted_vans.jpg';
import './main.scss';

function Main() {
    return (
        <div className="main-container">
            <div className="placeholder-image">
                <img src={Image} alt="main" className="main-pic"/>
            </div>
            <div className="main-headers">
                <h1>AINSLEE DICKEN</h1>
                <h3>Freelance Writer</h3>
                <h3>Featured In:</h3>
                <h5>Portland Monthly & Northwest Adventurer</h5>
            </div>
        </div>
    )
};

export default Main;