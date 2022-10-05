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
          </Switch>
        </Suspense>
      </AppLayout>
    </React.Fragment>
  )
}

export default Views