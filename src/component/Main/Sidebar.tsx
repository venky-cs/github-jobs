import React, { FunctionComponent, useState } from 'react'

const Sidebar: FunctionComponent = () => {
    const [isFullTime,setIsFullTime] = useState(false)
    const [location,setLocation] =useState<string>(' ')
    return (
        <div className="side">
            <div className="check">
            <input type="checkbox" name="" id="" checked={isFullTime} />
            <label>Full time</label>
            </div>

            <div className="search">
                <h3>LOCATION</h3>
                <input type="text" name="" id=""
                 placeholder="City, state, zip, code or country"
                 onChange={(e) => {
                    let loc = e.target.value;
                    setLocation(loc)
                 }}/>
            </div>

            <div className="select">
                
            </div>
        </div>
    )
}

export default Sidebar
