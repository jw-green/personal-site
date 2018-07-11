import React, { Component } from 'react';
import Showcase from '../components/showcase';

import timeline from '../timeline.png';

class TravelTimeline extends Component {
    renderCopy() {
        return (
            <div className="c-timeline_copy">
            <p>
                I was having a discussion with a friend who was taking a multi-destination
                trip across America. Starting from LA, he'd drift to Yosemite, 
                take in Vegas, see the Grand Canyon, and finally head over to New York to see me for a few days. 
            </p>
            <p>
                This trip consisted of a number of travel modes. Whether it was renting a car, taking a flight,
                or riding on AmTrak, the details quickly became blurred and caused him to sift through
                mail after mail to explain his perfect trip.
            </p>
            <p>
                The idea for Travel Timeline was borne of this. I wanted an interface where I could quickly add flight numbers and new nodes. The flight numbers would be used to grab timings and details from a third-party API, and I could then send that link to anyone I desired. Monitoring of travel status could be tracked in real-time.
            </p>
            <p>
                I mocked-up a front end proof of concept for a multi-part trip ending in Atlanta, GA. Seeing as I couldn't source any free third-party APIs I could use for flight numbers, this one is manually entered. There would also need to be some better way to get details for other modes of transportation, and neater ways of showing that a leg is completed.
            </p>
            </div>
        )
    }
    render() {
        return (
            <div className="c-timeline">
                <Showcase title="Travel Timeline" sub="Consolidate and easily share multi-part trip details" copy={this.renderCopy()} img={timeline}/>
            </div>
        )
    }
}

export default TravelTimeline;