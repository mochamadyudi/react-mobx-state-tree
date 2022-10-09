import React from 'react'
import ReactDOM from "react-dom";
import promiseFinally from "promise.prototype.finally";
import App from './App'
import {useStrict} from "mobx"
import {Provider} from "mobx-react";
import './assets/scss/main.css'
import './assets/scss/main.scss'
import "./assets/scss/tailwind.css"
import PlanetStore from './store/planetStore'
import PeopleStore from './store/peopleStore'
import StarshipStore from './store/starshipStore'

const stores = {
    PlanetStore,
    PeopleStore,
    StarshipStore
}
window._____APP_STATE_____ = stores;
window.React = React
promiseFinally.shim();
useStrict(false)

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
)