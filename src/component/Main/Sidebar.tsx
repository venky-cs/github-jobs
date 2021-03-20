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
                <input type="radio" name="country" value="london" onClick={(e:any) =>setLocation(e.target.value)} id=""/> <span>London</span> <br/>
                <input type="radio" name="country" value="amsterdam" onClick={(e: any) => setLocation(e.target.value)} id=""/> <span>Amsterdam</span> <br/>
                <input type="radio" name="country" value="newyork" onClick={(e: any) => setLocation(e.target.value)} id=""/> <span>New York</span> <br/>
                <input type="radio" name="country" value="berlin" onClick={(e: any) => setLocation(e.target.value)} id=""/> <span>Berlin</span>
            </div>
        </div>
        
    )
    function updateFullTime():void {
        setIsFullTime(prevState => !prevState)
    }
}

export default Sidebar
