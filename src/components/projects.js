import React, { Component } from 'react';
import ProjectCard from './project_card';
import '../styles/projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="c-projects">
                <div className="c-projects_headline">
                    <h1 className="c-projects_title">{this.props.title}</h1>
                    <h2 className="c-projects_sub">{this.props.sub}</h2>
                </div>
                <div className="c-projects_card-container">
                   <ProjectCard title="Travel Timeline" link="/travel-timeline"/>
                   <ProjectCard title="Azad" link="/coming-soon"/>
                   <ProjectCard title="Scrapers" link="/scrapers"/>
                   <ProjectCard title="Algorithms" link="/coming-soon"/>
                </div>
            </div>
        )
    }
}

export default Projects;