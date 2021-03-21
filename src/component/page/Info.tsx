import React, { FunctionComponent, useState, useEffect, useContext } from 'react'
import './Info.css'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../../AppRouter'

let title: string = 'Github Jobs'
const Info: FunctionComponent = (props: any) => {
    const [id, setId] = useState<any>('')
    const [datas, setDatas] = useState([])

    const dataContext = useContext(DataContext)

    const location = useLocation()
    useEffect(() => {
        setId(location.state)
        console.log(dataContext)
        console.log("id", location.state)
    }, [dataContext])


    useEffect(() => {
        console.log('ID', id)
        setDatas(dataContext.filter((data: any) => data.id === id))
        console.log("filtered Data", datas)
    }, [id])

    return (
        <>
            <h3>{title}</h3>
            {datas.map((data: any) =>
                <div className="info-page">
                    <div className="side">
                        <p>how to apply</p>
                    </div>

                    <div className="main-page">
                        <h4>{data.title}</h4>
                        <span>{data.type}</span>
                        <p>created_at</p>

                        <div className="content">
                            <img src={data.company_logo} alt="logo" />
                            <div>
                                <h4>{data.company}</h4>
                                <p>{data.location}</p>
                            </div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Info
