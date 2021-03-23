import React, { FunctionComponent, useState, useEffect, useContext } from 'react'
import './Info.css'
import { useLocation, Link } from 'react-router-dom'
import { DataContext } from '../../AppRouter'

let title: string = 'Github Jobs'
const Info: FunctionComponent = () => {
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
            {datas.map((data: any) =>
                <div className="info-page" key={data.id}>
                    <div className="side">
                        <div className="side-width">
                            <h3 className="title">{title}</h3>
                            <Link to="/">
                                <p className="back">Back to search</p>
                            </Link>
                            <p className="how">how to apply</p>
                            <div className="how-json" dangerouslySetInnerHTML={{ __html: data.how_to_apply }}></div>
                        </div>
                    </div>

                    <div className="main-page">
                        <div className="main-width">
                            <h4>{data.title}
                                <span>{data.type}</span> </h4>
                            <p>{getDaysAgo(data.created_at)} days ago</p>

                            <div className="content">
                                <img src={data.company_logo} alt="logo" />
                                <div>
                                    <h3>{data.company}</h3>
                                    <p>{data.location}</p>
                                </div>
                            </div>

                            <div className="json" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                            <br />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
    function getDaysAgo(created_at: string) {
        let a = created_at;
        let b = new Date(a);
        let createDay = b.getHours()
        let currentDay = new Date().getDate()
        let daysAgo = currentDay - createDay
        return daysAgo
    }
}

export default Info
