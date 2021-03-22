import React, { FunctionComponent, useContext } from 'react'
import Card from './Card'
import { DataContext } from '../../AppRouter'

import RingLoader from 'react-spinners/RingLoader'

const Content: FunctionComponent = () => {
    const dataContext = useContext(DataContext)
    console.log(dataContext)
    return (
        <div className="content">
            {dataContext.length > 1
                ? <Card data={dataContext} />
                : <div style={{ display: "grid", placeItems: "center", marginRight: "200px", marginTop: "100px" }}>
                    <RingLoader />
                </div>}
        </div>
    )
}

export default Content
