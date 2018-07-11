import React, { Component } from 'react';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Contact from '../components/contact';
import bust from '../bust.svg';
import About from '../components/about';

class Landing extends Component {
    render() {
        return (
            <div className="App">
                <Hero title="Hi, I'm Jacob." sub="Check out my latest trip"/>
                <About img={bust}/>
                <Projects title="Projects" sub="My current fascinations"/>
                <Contact/>
          </div>
        )
    }
}

export default Landing;