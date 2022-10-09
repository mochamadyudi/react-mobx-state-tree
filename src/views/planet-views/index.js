import React, {Suspense,lazy} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Loading from '../../components/shared-components/loading'
import Container from "../../components/layout-components/Container";

const PlanetViews = ({match})=> {
  return (
      <React.Fragment>
          <Suspense fallback={<Loading cover={'sub-page'}/>}>
              <Switch>
                  <Route path={`${match.url}/p/:id`} component={lazy(()=> import('./planet-detail/index'))}/>
                  <Route path={`${match.url}/list`} component={lazy(()=> import('./planet-list/index'))}/>
                  <Route path={`${match.url}/add`} component={lazy(()=> import('./planet-list/index'))}/>
                  <Route path={`${match.url}/edit`} component={lazy(()=> import('./planet-list/index'))}/>
                  <Redirect from={`${match.url}`} to={`${match.url}/list`}/>
              </Switch>
          </Suspense>
      </React.Fragment>
  )
}

export default PlanetViews