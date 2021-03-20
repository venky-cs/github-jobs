import React,{ FunctionComponent } from 'react'
import {Link, NavLink} from 'react-router-dom'

const Card:FunctionComponent = () => {
    return (
        <Link to="/info">
        <div className="card">
            <div className="logo">
                <img src="" alt="logo"/>
            </div>
            <div className="info">
                <h5>company</h5>
                <h3>title</h3>
                <p>type</p>
            </div>
            <div className="loc">
                <p>location</p>
                <p>created_at</p>
            </div>

        </div>
        </Link>
    )
}

export default Card
