import React, { FunctionComponent, useState, useEffect } from 'react'

const Sidebar: FunctionComponent<{ main: (ful: boolean, loc: string) => void }> = ({ main }) => {
    const [isFullTime, setIsFullTime] = useState<boolean>(false)
    const [location, setLocation] = useState<string>('')

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
                <span id="icon-left" className="material-icons">public</span>
                <input type="text" name="" id=""
                    placeholder="City, state, zip, code or country"
                    value={location.charAt(0).toUpperCase() + location.slice(1)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        let loc = e.target.value;
                        setLocation(loc.toLowerCase())
                    }} />
            </div>

            <div className="select">
                <div>
                    <input type="radio" name="country" value="london" onChange={getSelect} id="london" />
                    <label htmlFor="london">London</label>
                </div>
                <div>
                    <input type="radio" name="country" value="amsterdam" onChange={getSelect} id="amsterdam" />
                    <label htmlFor="amsterdam">Amsterdam</label>

                </div>
                <div>
                    <input type="radio" name="country" value="new+york" onChange={getSelect} id="new+york" />
                    <label htmlFor="new+york">New York</label>

                </div>
                <div>
                    <input type="radio" name="country" value="berlin" onChange={getSelect} id="berlin" />
                    <label htmlFor="berlin">Berlin</label>
                </div>
            </div>
        </div>

    )
    function updateFullTime(): void {
        setIsFullTime(prevState => !prevState)
    }
    function getSelect(event: React.ChangeEvent<HTMLInputElement>): void {
        let val = event.target.value;
        // console.log(val, "radio button")
        setLocation(val)
    }

}

export default Sidebar
