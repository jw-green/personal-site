import React, { Component } from 'react';
import Logo from '../Logo.svg';
import '../styles/coming_soon.css';

class ComingSoon extends Component {
    render() {
        return (
            <div className="c-coming">
                <div className="c-coming_headline">
                    <img src={Logo} alt="Jacob Green" height="100"/>
                    <h1 className="c-coming_title">Coming Soon</h1>
                    <h2 className="c-coming_sub">Watch this space.</h2>
                </div>
            </div>
        )
    }
}

export default ComingSoon;