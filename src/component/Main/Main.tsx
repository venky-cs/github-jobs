import React, { FunctionComponent } from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import Content from './Content'

const Main: FunctionComponent<{ main: (ful: boolean, loc: string) => void }> = ({ main }) => {
    return (
        <div className="main">
            <Sidebar main={main} />
            <Content />
        </div>
    )
}

export default Main
