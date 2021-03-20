import React,{ FunctionComponent } from 'react'

const Card:FunctionComponent = () => {
    return (
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
    )
}

export default Card
