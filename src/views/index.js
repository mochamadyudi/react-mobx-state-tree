import React, {Suspense, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import Loading from '../components/shared-components/loading'
import AppLayout from '../components/layout-components/AppLayout'
const Views = (props)=> {

  return (
    <React.Fragment>
      <AppLayout>
        <Suspense fallback={<Loading cover={'page'}/>}>
          <Switch>
            <Route path={'/'} exact component={lazy(()=> import("./home/index"))}/>
            <Route path={'/planet'} component={lazy(()=> import("./planet-views/index"))}/>
            <Route path={'/people'} component={lazy(()=> import("./people-views/index"))}/>
            <Route path={'/starship'} component={lazy(()=> import("./starship-views/index"))}/>
            <Route>
              <span>Not Found</span>
            </Route>
          </Switch>
        </Suspense>
      </AppLayout>
    </React.Fragment>
  )
}

export default Views