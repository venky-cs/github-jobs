import React,{FunctionComponent,useState} from 'react'

const Search:FunctionComponent = () => {
    const [title,setTitle] = useState('')
    return (
        <div className="search">
            <input type="text" placeholder="Title,Companies,expertise or benefits"
                onChange={(e) => {
                    let val = e.target.value;
                    setTitle(val)
                }}/>
            <button>Search</button>
        </div>
    )
}

export default Search
