import React, { FunctionComponent, useState, useEffect, useContext } from 'react'
import './Info.css'
import { useLocation, Link } from 'react-router-dom'
import { DataContext } from '../../AppRouter'

let title: string = 'Github '
const Info: FunctionComponent = () => {
    const [id, setId] = useState<any>('')
    const [datas, setDatas] = useState([])

    const dataContext = useContext(DataContext)

    const location = useLocation()
    useEffect(() => {
        setId(location.state)
        // console.log(dataContext)
        // console.log("id", location.state)
    }, [location])


    useEffect(() => {
        // console.log('ID', id)
        setDatas(dataContext.filter((data: any) => data.id === id))
        // console.log("filtered Data", datas)
    }, [dataContext, id])

    return (
        <>
            {datas.map((data: any) =>
                <div className="info-page" key={data.id}>
                    <div className="side">
                        <div className="side-width">
                            <h3 className="title">{title}
                                <span>Jobs</span></h3>
                            <Link to="/" id="textDecoration">
                                <p className="back">
                                    <span id="icon-back" className="material-icons">keyboard_backspace</span>
                                    Back to search
                                </p>
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
                                    <p>
                                        <span id="no-border" className="material-icons">public</span>
                                        {data.location}
                                    </p>
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
