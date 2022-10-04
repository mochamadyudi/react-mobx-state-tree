import React from 'react'
import {Route, Switch} from "react-router-dom";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/">
                        <span>home</span>
                    </Route>
                </Switch>
            </div>
        );
    }
}