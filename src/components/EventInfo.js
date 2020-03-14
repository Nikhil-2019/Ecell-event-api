import React from 'react'
import {Link} from 'react-router-dom';

function EventInfo(props) {
    return (
        <div>
        <div className="event-container">
        <h1 className="shadow">{props.name}<em></em></h1>
        <div className="flex-container">
            <div className="image">
                <img src={props.img} alt= {props.name}/>
            </div>
            <div className="desc">
                <p className="eventdescription">
                    {props.detail}
                </p>
            </div>
        </div>
        <h4 className="data">
            <Link to={`mailto:${props.mail}`}>
                {props.mail}
            </Link>
        </h4>
        <h4 className="data">Year:
            {props.year}
        </h4>
        <h4 className="data">Total Registered:
            {props.registered}
        </h4>
        <h4 className="data">Date of Event:
            {props.date}
        </h4>
        <h4 className="data">Time:
            {props.time}
        </h4>
        <Link to="/"><button>GO BACK</button></Link>
    </div>
        </div>
    )
}

export default EventInfo
    