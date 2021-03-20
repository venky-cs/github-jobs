import React,{FunctionComponent} from 'react'
import './Header.css'
import Search from './Search'

let title:string = 'Github Jobs'
const Header:FunctionComponent<{head:any,update:any}> = ({head,update}) => {
    return (
        <div className="header">
            <h3 className="title">
                {title}
            </h3>

            <Search head={head} update={update}/>
        </div>
    )
}

export default Header
