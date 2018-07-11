import React, { Component } from 'react';
import '../styles/contact.css';
import Logo from '../Logo.svg';

class Contact extends Component {
    render() {
        return (
            <div className="c-contact">
                <div className="c-contact__card_holder">
                    <div className="c-contact__card">
                        <div className="c-card__side">
                            <img src={Logo} height="100"/>
                        </div>
                        <div className="c-card__side-back">
                            <p className="c-card_name"> Jacob Green </p>
                            <p className="c-card_role"> Programmer </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;