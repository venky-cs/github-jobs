import React,{FunctionComponent,useContext} from 'react'
import Card from './Card'
import {DataContext} from '../../AppRouter'

const Content:FunctionComponent = () => {
    const dataContext = useContext(DataContext)
    console.log(dataContext)
    return (
        <div className="content">
            <Card data={dataContext}/>
        </div>
    )
}

export default Content
