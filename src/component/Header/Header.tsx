import React, { FunctionComponent } from 'react'
import './Header.css'
import Search from './Search'

let title: string = 'Github'
const Header: FunctionComponent<{ head: any, update: any }> = ({ head, update }) => {
    return (
        <div className="header">
            <h3 className="title">
                {title} <span>Jobs</span>
            </h3>

            <Search head={head} update={update} />
        </div>
    )
}

export default Header
