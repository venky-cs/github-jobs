import React, { FunctionComponent,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Card: FunctionComponent<{ data: any }> = ({ data }) => {
    const[datas,setDatas]=useState([])
    useEffect(() => {
        setDatas(data)
    },[data])
    return (
        <Link to="/info">
            {datas.map((data:any) =>
                <div className="card" key={data}>
                    <div className="logo">
                        <img src={data.company_logo} alt="logo" />
                    </div>
                    <div className="info">
                        <h5>{data.company}</h5>
                        <h3>{data.title}</h3>
                        <p>{data.type}</p>
                    </div>
                    <div className="loc">
                        <p>{data.location}</p>
                        <p>created_at</p>
                    </div>
                </div>)}
        </Link>
    )
}

export default Card
