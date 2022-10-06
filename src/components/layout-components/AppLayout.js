import React from 'react'
import StyledChildren from './StyledChildren'
import Navbar from './navbar/Navbar'
import Container from './Container'

const AppLayout = (props)=> {
  return (
    <div className='w-full'>
      <Navbar/>
        <div className={'yid-main mt-[60px] min-h-[calc(100%-60px)]'} title={'app-main'}>
            <StyledChildren children={props.children}/>
        </div>
    </div>
  )
}

export default AppLayout