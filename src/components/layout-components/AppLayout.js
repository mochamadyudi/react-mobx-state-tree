import React from 'react'
import StyledChildren from './StyledChildren'
import Navbar from './navbar/Navbar'
import Container from './Container'

const AppLayout = (props)=> {
  return (
    <div className='w-full'>
      <Navbar/>
      <Container size={'xl'}>
        <div className={'yid-main mt-[60px]'} title={'app-main'}>
          <StyledChildren children={props.children}/>
        </div>
      </Container>
    </div>
  )
}

export default AppLayout