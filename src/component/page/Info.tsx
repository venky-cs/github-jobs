import React, { FunctionComponent } from 'react'
import './Info.css'

let title: string = 'Github Jobs'
const Info: FunctionComponent = () => {
    return (
        <>
            <h3>{title}</h3>
            <div className="info-page">
                <div className="side">
                    <p>how to apply</p>
                </div>

                <div className="main-page">
                    <h4>title</h4>
                    <span>type</span>
                    <p>created_at</p>

                    <div className="content">
                        <img src="" alt="logo" />
                        <div>
                            <h4>company</h4>
                            <p>location</p>
                        </div>
                    </div>

                    <p>description</p>
                </div>
            </div>
        </>
    )
}

export default Info
