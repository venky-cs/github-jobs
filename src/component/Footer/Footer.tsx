import React, { FunctionComponent, useContext } from 'react'
import { DataContext } from '../../AppRouter'

const Footer: FunctionComponent = () => {
    const dataContext = useContext(DataContext)

    return (
        <div className={dataContext.length > 5 ? 'relative' : 'absolute'}>
            <p>created by venky -devChallenges.io</p>
        </div>
    )
}

export default Footer
