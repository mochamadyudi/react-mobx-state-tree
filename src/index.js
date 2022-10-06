import React from 'react'
import ReactDOM from "react-dom";
import promiseFinally from "promise.prototype.finally";
import App from './App'
import {Provider} from "mobx-react";
import './assets/scss/main.css'
import './assets/scss/main.scss'
import "./assets/scss/tailwind.css"
import PlanetStore from './store/planetStore'
const stores = {
  PlanetStore
}
window._____APP_STATE_____ = stores;
window.React = React
promiseFinally.shim();
'use strict'


ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
)