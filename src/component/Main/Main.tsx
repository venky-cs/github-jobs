import React,{FunctionComponent} from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import Content from './Content'

const Main:FunctionComponent = () => {
    return (
        <div className="main">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Main
