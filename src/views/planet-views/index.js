import React, {Suspense,lazy} from 'react'
import { Switch,Route} from 'react-router-dom'
import Loading from '../../components/shared-components/loading'

const PlanetViews = ({match})=> {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading cover={'sub-page'}/>}>
        <Switch>
          <Route path={`${match.url}`} exact component={lazy(()=> import('./planet-list/index'))}/>
          <Route path={`${match.url}/add`} exact component={lazy(()=> import('./planet-list/index'))}/>
          <Route path={`${match.url}/edit`} exact component={lazy(()=> import('./planet-list/index'))}/>
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default PlanetViews