import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from '../App'
import Login from '../view/login/index'
import Home from '../view/home/index'

export default class Irouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                    </Switch>
                    <Switch>
                        <Route path="/index" exact component={Home} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}