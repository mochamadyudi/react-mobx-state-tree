import React from 'react'
import StyledChildren from './StyledChildren'

const AppLayout = (props)=> {
  return (
    <div className='w-full'>
      <div className={'yid-main'}>
        <StyledChildren children={props.children}/>
      </div>
    </div>
  )
}

export default AppLayout