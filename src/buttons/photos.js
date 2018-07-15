import React, { Component } from 'react';
import '../styles/photo_button.css';
import Camera from '../camera.svg';

class PhotoButton extends Component {
    RenderButton( link ) {
        console.log(link)
        if ( link ) {
            return (
                <a target="_blank" href={this.props.link}>
                    <div className={`c-photo_button-` + this.props.animate}>
                        <img src={Camera}/>
                        <p>See the Photos</p>
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
        <div className="c-photo_container">
            {this.RenderButton(this.props.link)}
        </div>
        )
    }
}

export default PhotoButton;

