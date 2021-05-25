import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination'

const Card: FunctionComponent<{ data: any }> = ({ data }) => {
    const [datas, setDatas] = useState([])
    const [activePage, setActivePage] = useState(1)
    useEffect(() => {
        setDatas(data)
    }, [data])


    // pagination
    const jobPerPage = 5;
    const indexOfLastJob = activePage * jobPerPage;
    const indexOfFirstJob = indexOfLastJob - jobPerPage;
    const currentJobs = datas.slice(indexOfFirstJob, indexOfLastJob);

    const renderJobs = currentJobs.map((data: any) =>
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
                    <p>
                        <span id="icon-bottom" className="material-icons">public</span>
                        {data.location}
                    </p>
                    <p>
                        <span id="icon-bottom" className="material-icons">query_builder</span>
                        {getDaysAgo(data.created_at)} days ago
                            </p>
                </div>
            </div>
        </Link>
    )

    const handlePageChange = (pageNumber: number) => {
        console.log(pageNumber, 'current page');
        setActivePage(pageNumber)
    }


    return (
        <>
            {renderJobs}
            <div className="pagination">
                <div className="pagination-wrapper">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={datas.length}
                        pageRangeDisplayed={3}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
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
