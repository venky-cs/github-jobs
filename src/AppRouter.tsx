import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Info from './component/page/Info'

import axios from 'axios'
let cors = "https://cors-anywhere-venky.herokuapp.com/";

export const DataContext = React.createContext([])

function AppRouter() {
    const [state, setState] = useState<boolean>(false)
    const [description, setDescription] = useState<string>('')
    const [location, setLocation] = useState<string>('')

    const [data,setData] =useState<[]>([])

    useEffect(() => {
        axios.get(`${cors}https://jobs.github.com/positions.json?description=${description}&location=${location}`)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [state])


    return (

        <DataContext.Provider value={data}>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <App head={getHead} main={getMain} update={updateState} />
                    </Route>
                    <Route exact path="/info">
                        <Info />
                    </Route>
                </Switch>
            </Router>
        </div>
    </DataContext.Provider>
    )

    function getHead(val: string) {
        let value = val;
        console.log("TITLE", value)
        setDescription(value)
    }

    function getMain(ful: boolean, loc: string) {
        let full = ful;
        let location = loc;
        console.log("FullTime", full);
        console.log("Location", location)
        setLocation(location)
    }

    function updateState() {
        console.log("fire")
        setState(prevState => !prevState)
    }
}

export default AppRouter;
