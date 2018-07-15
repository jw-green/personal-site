import React, { Component } from 'react';
import Showcase from '../components/showcase';

import scraper from '../scraper.png';

class Azad extends Component {
    renderCopy() {
        return (
            <div className="c-azad_copy">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        )
    }
    render() {
        return (
            <div className="c-azad">
                <Showcase title="Azad" 
                          sub="Web scraping as much as possible" 
                          copy={this.renderCopy()} 
                          img={scraper}
                          link="https://github.com/jw-green/stackoverflow-scraper"
                />
            </div>
        )
    }
}

export default Azad;