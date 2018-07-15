import React from 'react';
import '../styles/Node.css';
import check from '../check.svg';
import PhotoButton from '../buttons/photos';

const Node = ({ from, to, arrival_time, depart_time, date, state, link }) => {

    function CheckState(state) {
        const isComplete = state;
        if (isComplete) {
          return ( 
            <div className="c-circle-complete">
                <img className="c-circle-check" src={check}/>
            </div>
          )
        }
        return;
      }

    return (
        <div className="c-travel_node">
            <div className="c-travel-node__circle">
                {CheckState(state)}
            </div>
            <div className="c-travel-node__label">
                <h1 className="c-travel-node__header">
                    {from} &#8594; {to}
                </h1>
                <h2 className="c-travel-node__date">
                    {date}
                </h2>
                <div className="c-travel-node__times">
                    <h2 className="c-travel-node__departure">
                        Depart: {depart_time}
                    </h2>
                    <h2 className="c-travel-node__arrival">
                        Arrive: {arrival_time}
                    </h2>
                </div>
                <div className="c-node_photo_button">
                    <PhotoButton link={link}/>
                </div>
            </div>
        </div>
    )
}

export default Node;