import React, { Component } from 'react';
import Logo from '../Logo.svg';
import '../styles/not_found.css';

class NotFound extends Component {
    render() {
        return (
            <div className="c-not_found">
                <div className="c-coming_headline">
                    <img src={Logo} alt="Jacob Green" height="100"/>
                    <h1 className="c-coming_title">404 Not Found</h1>
                    <h2 className="c-coming_sub">Looks like you took a wrong turn.</h2>
                </div>
            </div>
        )
    }
}

export default NotFound;