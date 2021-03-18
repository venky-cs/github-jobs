import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;
