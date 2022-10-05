import React,{Component} from 'react'
import { Route, Switch, withRouter} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/scss/main.css'
import './assets/scss/main.scss'
import Views from './views/index'
@inject("planetStore")
@withRouter
@observer
export default class App extends Component {

    render() {
        return (
            <div datatestid={1} className={'w-full bg-gray-50'}>
              <Router>
                <Switch>
                  <Route path={'/'} component={Views}/>
                </Switch>
              </Router>
            </div>
        );
    }
}