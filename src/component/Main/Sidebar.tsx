import React, { FunctionComponent, useState, useEffect } from 'react'

const Sidebar: FunctionComponent<{ main: any }> = ({ main }) => {
    const [isFullTime, setIsFullTime] = useState<boolean>(false)
    const [location, setLocation] = useState<string>(' ')

    useEffect(() => {
        main(isFullTime, location)
    }, [main, isFullTime, location])

    return (
        <div className="side">
            <div className="check" onClick={updateFullTime}>
                <input type="checkbox" name="" id="" checked={isFullTime}
                    onChange={updateFullTime} />
                <label>Full time</label>
            </div>

            <div className="search">
                <h3>location</h3>
                <input type="text" name="" id=""
                    placeholder="City, state, zip, code or country"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        let loc = e.target.value;
                        setLocation(loc.toLowerCase())
                    }} />
                <span id="icon-left" className="material-icons">public</span>
            </div>

            <div className="select">
                <input type="radio" name="country" value="london" onChange={getSelect} id="" /> <span>London</span> <br />
                <input type="radio" name="country" value="amsterdam" onChange={getSelect} id="" /> <span>Amsterdam</span> <br />
                <input type="radio" name="country" value="new+york" onChange={getSelect} id="" /> <span>New York</span> <br />
                <input type="radio" name="country" value="berlin" onChange={getSelect} id="" /> <span>Berlin</span>
            </div>
        </div>

    )
    function updateFullTime(): void {
        setIsFullTime(prevState => !prevState)
    }
    function getSelect(event: React.ChangeEvent<HTMLInputElement>): void {
        let val = event.target.value;
        console.log(val, "radio button")
        setLocation(val)
    }

}


export default Sidebar
