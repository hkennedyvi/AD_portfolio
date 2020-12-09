import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="contact-entry">
                    <i class="contact-icon fas fa-phone"></i>
                    <div>
                        <p className="contact-text">
                            Let's Talk
                        </p>
                        <span className="contact-text-secondary">
                            503-123-4567
                        </span>
                    </div>
                </div>
                <div className="contact-entry">
                <i class="contact-icon far fa-envelope"></i>
                    <div>
                        <p className="contact-text">
                            Message
                        </p>
                        <span className="contact-text-secondary">
                        503-123-4567
                        </span>
                    </div>
                </div>
                <div className="contact-entry">
                <i class="contact-icon fab fa-instagram"></i>
                    <div>
                        <p className="contact-text">
                            Get Social
                        </p>
                        <span className="contact-text-secondary">
                        503-123-4567
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;