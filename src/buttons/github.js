import React, { Component } from 'react';
import '../styles/github_button.css';
import GitHub from '../github.svg';

class GitHubButton extends Component {
    RenderButton( link ) {
        console.log(link)
        if ( link ) {
            return (
                <a target="_blank" href={this.props.link}>
                    <div className={`c-github_button-` + this.props.animate}>
                        <img src={GitHub}/> 
                        <p>See this on GitHub</p>
                    </div>
                </a>
            )
        }
        else {
            return;
        }
    }

    render() {
        return (        
        <div className="c-github_container">
            {this.RenderButton(this.props.link)}
        </div>
        )
    }
}

export default GitHubButton;

