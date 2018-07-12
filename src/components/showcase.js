import React, { Component } from 'react';
import '../styles/showcase.css'
import GitHubButton from '../buttons/github';

class Showcase extends Component {
    render() {
        return (
            <div className="c-showcase">
                <div className="c-showcase_headline">
                    <h1 className="c-showcase_title">{this.props.title}</h1>
                    <h2 className="c-showcase_sub">{this.props.sub}</h2>
                </div>
                <div className="c-showcase_content">
                    <div className="c-showcase_copy">{this.props.copy}</div>
                    <img className="c-showcase_image" src={this.props.img} alt="Showcase"/>
                </div>
                <GitHubButton link={this.props.link} animate="true"/>
            </div>
        )
    }
}

export default Showcase;