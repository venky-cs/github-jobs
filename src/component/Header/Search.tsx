import React,{FunctionComponent,useState,useEffect} from 'react'

const Search: FunctionComponent<{head:any,update:any}> = ({head,update}) => {
    const [title,setTitle] = useState<string>('')
    useEffect(() => {
        head(title)
    }, [head,title])
    return (
        <div className="search">
            <input type="text" placeholder="Title,Companies,expertise or benefits"
                onChange={(e) => {
                    let val = e.target.value;
                    setTitle(val)
                }}/>
            <button onClick={update}>Search</button>
        </div>
    )
}

export default Search
