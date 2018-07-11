import React, { Component } from 'react';
import Showcase from '../components/showcase';

import scraper from '../scraper.png';

class Scrapers extends Component {
    renderCopy() {
        return (
            <div className="c-timeline_copy">
                <p>
                    I make a number of web scrapers for various reasons. Whether this is to grab a collection of books, quotes by Dwayne Johnson, datasets, or the top posts from StackOverflow, there's always something I'm keen to get at programmatically.
                </p>
                <p>
                    The StackOverflow scraper is one of my favourites. Built in Python, it looks through StackOverflow's top posts for a specified language. I'm of the opinon that these are the 'must know' parts of that language, and should be studied with great care. The script then spits out the information in a markdown document, along with the user that created it and the number of votes.
                </p>
                <p>
                    From the top 50 posts, I'd consider this a kind of book. If the number of posts was reduced to, say, 10, and the number of languages increased to 6-8, it could be quite a compelling read/study for cross-language FAQs.
                </p>
            </div>
        )
    }
    render() {
        return (
            <div className="c-timeline">
                <Showcase title="Scrapers" sub="Web scraping as much as possible" copy={this.renderCopy()} img={scraper} link="https://github.com/jw-green/stackoverflow-scraper"/>
            </div>
        )
    }
}

export default Scrapers;