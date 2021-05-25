import React, { FunctionComponent } from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import Content from './Content'

const Main: FunctionComponent<{ main: (ful: boolean, loc: string) => void; load: boolean }> = ({ main, load }) => {
    return (
        <div className="main">
            <Sidebar main={main} />
            <Content load={load} />
        </div>
    )
}

export default Main
