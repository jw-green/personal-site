import React, { Component } from 'react';
import Showcase_T from './showcase_t';
import '../styles/about.css'

class About extends Component {
    renderCopy() {
        return (
            <div>
                <p>
                    Ever since touching C++ for the first time, I was hooked. 
                </p>
                <p>
                    Well, that's not strictly true. After bombing an internship interview (hard) in my first year of university, I learned to stop worrying and love coding. Creating games in C++ gave way to web scrapers, ML models, and helper scripts in Python before long. This was then extended to the web. Frameworks like React give that modular, OO-type feel I first fell in love with in C++. I've worked in service, sales, product delivery, and training across multiple industries&mdash; right now in FinTech. Born and raised in the UK and currently living in the US.
                </p>

                <p>
                    My interests are around code, machine learning, design, psychology, philosophy, and coaching. I read a lot around the areas of business, psychology, and philosophy. 
                </p>
                <p>
                    At present, my key focus in coding projects is directed towards creating a platform for total human optimisation: Azad. I feel like this is the perfect way to fully utilise my broad range of experience.
                </p>
            </div>
        )
    }
    render() {
        return (
            <Showcase_T type="about" 
                        title="About Me"
                        sub="Programmer, Designer, Trainer, and Coach"
                        img={this.props.img} 
                        copy={this.renderCopy()}
            />
        )
    }
}

export default About;