import ReactDOM from "react-dom";
import promiseFinally from "promise.prototype.finally";
import React from "react";
import { HashRouter } from "react-router-dom";

import { Provider } from "mobx-react";

const stores = {}
window._____APP_STATE_____ = stores;

promiseFinally.shim();
'use strict'

ReactDOM.render(
    <Provider {...stores}>
        <span>testing</span>
    </Provider>,
        document.getElementById("root")
)