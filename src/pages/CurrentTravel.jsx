import React, { Component } from 'react';
import Timeline from '../components/Timeline';

class CurrentTravel extends Component {
    render() {
        return (
            <div className="c-timeline">
                <h1 className="c-timeline_title"> The Devil Went Down to Georgia </h1>
                <Timeline/>
            </div>
        )
    }
}

export default CurrentTravel;