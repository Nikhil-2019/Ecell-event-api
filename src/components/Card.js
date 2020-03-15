import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <div>
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img className="shadow" src={props.img} alt=""/>
                </div>
                <div className="card-rear">
                    <p className="name">
                        {props.name}
                    </p>
                    <button><Link to={props.link}>KNOW MORE</Link></button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Card
