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
                        <App />
                    </Route>
                    <Route exact path="/info">
                        <Info />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;
