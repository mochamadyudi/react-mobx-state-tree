import React, {Suspense,lazy} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Loading from "../../components/shared-components/loading";
import Container from "../../components/layout-components/Container";
const PeopleViews = ({match})=> {
    return (
        <Container size={'xl'}>
            <Suspense fallback={<Loading cover={'page'}/> }>
                <Switch>
                    <Route path={`${match.url}/list`} component={lazy(()=> import("./people-list/index"))}/>
                    <Route path={`${match.url}/add`} component={lazy(()=> import("./people-add/index"))}/>
                    <Route path={`${match.url}/edit`} component={lazy(()=> import("./people-edit/index"))}/>
                    <Redirect from={`${match.url}`} to={`${match.url}/list`}/>
                </Switch>
            </Suspense>
        </Container>
    )
}

export default PeopleViews