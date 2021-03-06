import React from 'react';
import Node from './Node.js';
import '../styles/Timeline.css';

const Timeline = ({}) => {
    return (
        <div className="c-timeline">
            <Node from="Newark, NJ"
                to="Philadelphia, PA"
                depart_time="0717" 
                arrival_time="0820" 
                date="07/15"
                state="Complete"
                link="https://flic.kr/s/aHsmokPuMj"
                />

            <Node from="Philadelphia, PA"
                to="Baltimore, MD"
                depart_time="0854" 
                arrival_time="1001" 
                date="07/16"
                state="Complete"
                link="https://flic.kr/s/aHsmmz9ztR"
                />

            <Node from="Baltimore, MD"
                to="Washington, DC"
                depart_time="0844" 
                arrival_time="0924" 
                date="07/17"
                state="Complete"
                link="https://flic.kr/s/aHskBvGfc4"
                />

            <Node from="Washington, DC"
                to="Charlottesville, VA"
                depart_time="1100" 
                arrival_time="1343" 
                date="07/18"
                state="Complete"
                link="https://flic.kr/s/aHskEMcftA"
                />
            
            <Node from="Charlottesville, VA"
                to="Atlanta, GA"
                depart_time="2052" 
                arrival_time="0813+1"
                date="07/19"
                state="Complete"
                link="https://flic.kr/s/aHsmpjnnyT"
                />

            <Node from="Atlanta, GA"
                to="LGA"
                depart_time="1030" 
                arrival_time="1243" 
                date="07/21"
                state="Complete"
                />
        </div>
    )
}

export default Timeline;