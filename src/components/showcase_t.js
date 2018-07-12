import React, { Component } from 'react';
import '../styles/showcase.css'
import GitHubButton from '../buttons/github';

class Showcase_T extends Component {
    render() {
        return (
            <div className={`c-` + this.props.type}>
                <div className={`c-` + this.props.type + `_headline`}>
                    <h1 className={`c-` + this.props.type + `_title`}>{this.props.title}</h1>
                    <h2 className={`c-` + this.props.type + `_sub`}>{this.props.sub}</h2>
                </div>
                <div className={`c-` + this.props.type + `_wrapper`}>
                    <div className={`c-showcase_content c-` + this.props.type + `_content`}>
                        <div className={`c-showcase_copy c-` + this.props.type + `_copy`}>{this.props.copy}</div>
                        <img className={`c-showcase_image c-` + this.props.type + `_image`} src={this.props.img} alt="Showcase"/>
                    </div>
                    <GitHubButton link={this.props.link} animate="true"/>
                </div>
            </div>
        )
    }
}

export default Showcase_T;