import React from 'react'
import Container from '../Container'
import Utils from '../../../utils'
import Menus from '../../shared-components/menus/menus'

export default class Navbar extends React.Component{
  render(){
    return (
        <div className='w-full h-[60px] bg-white shadow-md fixed top-0 left-0 z-50'>
          <Container size={'xl'}>
            <div className='flex items-center  h-full w-full justify-between'>
              <div className={'block'}>
                <img src={'/img/logo.png'} alt={'logo-app'} className={'object-contain w-[140px]'} />
              </div>
              <div className={'block relative'}>
                <Menus menu={Utils.menus}/>
              </div>
            </div>

          </Container>
        </div>
    )
  }
}