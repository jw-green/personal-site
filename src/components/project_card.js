import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/project_card.css'

class ProjectCard extends Component {
    render() {
        return (
            <Link to={this.props.link}>
                <div className="c-project_card">
                    <div className="c-project_card-image">
                        <img src={this.props.img_src}/>
                    </div>
                    <p className="c-project_card-title">{this.props.title}</p>
                </div>
            </Link>
        )
    }
}

export default ProjectCard;