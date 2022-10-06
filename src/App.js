import React,{Component} from 'react'
import { Route, Switch, withRouter} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views/index'

@inject("PlanetStore")
@observer
export default class App extends Component {

    render() {
        return (
            <div className={'w-full min-h-[calc(100vh-60px)]'}>
              <Router>
                <Switch>
                  <Route path={'/'} component={Views}/>
                </Switch>
              </Router>
            </div>
        );
    }
}