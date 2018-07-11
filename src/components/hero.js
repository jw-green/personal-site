import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="c-hero">
                <div className="c-hero_headline">
                    <h1 className="c-hero_title">{this.props.title}</h1>
                    <Link to="/current-travel">
                        <h2 className="c-hero_sub">{this.props.sub}</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Hero;