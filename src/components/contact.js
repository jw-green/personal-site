import React, { Component } from 'react';
import '../styles/contact.css';
import Logo from '../Logo.svg';
import GitHubButton from '../buttons/github';

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
                            <div>
                                <p className="c-card_name"> Jacob Green </p>
                                <p className="c-card_role"> admin@jacobwgreen.com </p>
                            </div>
                            <GitHubButton link="https://github.com/jw-green/personal-site" animate="false"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;