import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Info from './component/page/Info'

function AppRouter() {
    return (
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
    )

    function getHead(val:string){
        let value = val;
        console.log("TITLE",value)
    }

    function getMain(ful:boolean,loc:string){
        let full = ful;
        let location = loc;
        console.log("FullTime",full);
        console.log("Location",location)
    }

    function updateState(){
        console.log("fire")
    }
}

export default AppRouter;
