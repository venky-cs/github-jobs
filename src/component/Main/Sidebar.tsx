import React, { FunctionComponent, useState, useEffect } from 'react'

const Sidebar: FunctionComponent<{main:any}> = ({main}) => {
    const [isFullTime,setIsFullTime] = useState<boolean>(false)
    const [location,setLocation] =useState<string>(' ')

    useEffect(() => {
        main(isFullTime,location)
    },[main,isFullTime, location])
    
    return (
        <div className="side">
            <div className="check" onClick={updateFullTime}>
            <input type="checkbox" name="" id="" checked={isFullTime} 
            onChange={updateFullTime}/>
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
    function updateFullTime():void {
        setIsFullTime(prevState => !prevState)
    }
}

export default Sidebar
