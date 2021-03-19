import React from 'react'
import Search from './Search'

let title:string = 'Github Jobs'
const Header = () => {
    return (
        <div className="header">
            <h3 className="title">
                {title}
            </h3>

            <Search />
        </div>
    )
}

export default Header
