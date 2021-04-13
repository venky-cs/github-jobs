import React, { FunctionComponent, useState, useEffect } from 'react'

const Search: FunctionComponent<{ head: (val:string) => void, update: () => void}> = ({ head, update }) => {
    const [title, setTitle] = useState<string>('')
    useEffect(() => {
        head(title)
    }, [head, title])
    return (
        <div className="search">
            <div className="input">
                <span id="icon-right" className="material-icons">
                    work_outline
                </span>
                <input type="text" placeholder="Title,Companies,expertise or benefits"
                    onChange={(e) => {
                        let val = e.target.value;
                        setTitle(val)
                    }} />
                <button onClick={update}>Search</button>
            </div>
        </div>
    )
}

export default Search
