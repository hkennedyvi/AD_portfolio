import React from 'react';
import './projects.scss';

function Projects() {
    return (
        <div className="projects-container">
            <div className="pm-container">
                <h1 className="projects-header">
                    Portland Monthly:
            </h1>
                <div className="pm-list">
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                </div>
            </div>
            <div className="pm-container">
                <h1 className="projects-header">
                    Adventure Monthly:
            </h1>
                <div className="pm-list">
                    <div className="pm-entry">ENTRY</div>
                    <div className="pm-entry">ENTRY</div>
                </div>
            </div>
        </div>
    )
};

export default Projects;