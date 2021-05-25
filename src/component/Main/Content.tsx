import React, { FunctionComponent, useContext } from 'react'
import Card from './Card'
import { DataContext } from '../../AppRouter'

import RingLoader from 'react-spinners/RingLoader'

const Content: FunctionComponent<{ load: boolean }> = ({ load }) => {
    const dataContext = useContext(DataContext)
    // console.log(load)
    // console.log(dataContext)
    return (
        <div className="content">
            {dataContext.length > 1
                ? <Card data={dataContext} />
                : <div style={{ display: "grid", placeItems: "center", marginRight: "200px", marginTop: "100px" }}>
                    {load ? <h2>No Data</h2> : <RingLoader />}
                </div>}
        </div>
    )
}

export default Content
