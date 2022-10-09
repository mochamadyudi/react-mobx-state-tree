import React, {Suspense, lazy} from 'react'
import Loading from "../../components/shared-components/loading";
import {Route, Switch, Redirect} from "react-router-dom";
import Container from "../../components/layout-components/Container";


const StarshipViews = ({match}) => {
    return (
        <React.Fragment>

            <Suspense fallback={<Loading cover={'page'}/>}>
                <Switch>
                    <Route path={`${match.url}/list`} component={lazy(() => import("./starship-list/index"))}/>
                    <Route path={`${match.url}/p/:id`} component={lazy(() => import("./starship-detail/index"))}/>
                    <Route path={`${match.url}/add`} component={lazy(() => import("./starship-list/index"))}/>
                    <Route path={`${match.url}/edit`} component={lazy(() => import("./startship-edit/index"))}/>
                    <Redirect from={`${match.url}`} to={`${match.url}/list`}/>
                </Switch>
            </Suspense>
        </React.Fragment>
    )
}

export default StarshipViews