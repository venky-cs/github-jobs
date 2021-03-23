import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Card: FunctionComponent<{ data: any }> = ({ data }) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setDatas(data)
    }, [data])
    return (
        <>
            {datas.map((data: any) =>
                <Link key={data.id} to={{ pathname: '/info', state: data.id }} style={{ textDecoration: "none" }}>
                    <div className="card" key={data.id}>
                        <div className="flex">
                            <div className="logo">
                                <img src={data.company_logo} alt="logo" />
                            </div>
                            <div className="info">
                                <h5>{data.company}</h5>
                                <h3>{data.title}</h3>
                                <p>{data.type}</p>
                            </div>
                        </div>
                        <div className="loc">
                            <p>{data.location}</p>
                            <p>{getDaysAgo(data.created_at)} days ago</p>
                        </div>
                    </div>
                </Link>
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

export default Card
