import React from 'react'
import Container from '../Container'
import Utils from '../../../utils'
import Menus from '../../shared-components/menus/menus'


const Navbar = (props) => {
  return (
    <div className='w-full h-[60px] bg-white shadow-md fixed top-0 left-0 z-50'>
      <Container size={'xl'}>
        <div className='flex items-center  h-full w-full justify-between'>
          <div className={'block'}>
            <img src={'/img/logo.png'} alt={'logo-app'} className={'object-contain w-[140px]'} />
          </div>
          <div className={'block relative'}>
            <Menus menu={Utils.menus}/>
            {/*<ul className={'flex items-center space-x-6 yid-menu'}>*/}
            {/*  {Utils.menus.map((item,index) => {*/}
            {/*    return (*/}

            {/*      <li key={`menus-${index}`} className={'yid-menu-item'}>*/}
            {/*        <span>{typeof (item.label) !== 'undefined' ? item.label : '-'}</span>*/}
            {/*        {*/}
            {/*          typeof (item.submenu) !== 'undefined' && Array.isArray(item.submenu) && item.submenu.length > 0 && (*/}
            {/*            <ul className={'yid-menu-item__submenu'}>*/}
            {/*              {*/}
            {/*                item.submenu.map((subFirst,subIndex)=> {*/}
            {/*                  return (*/}
            {/*                    <li key={`menu-sub-${subIndex}`} className={'yid-menu-item__submenu-item'}>*/}
            {/*                      <span>{subFirst.label}</span>*/}
            {/*                    </li>*/}
            {/*                  )*/}
            {/*                })*/}
            {/*              }*/}
            {/*            </ul>*/}
            {/*          )*/}
            {/*        }*/}
            {/*      </li>*/}

            {/*    )*/}
            {/*  })}*/}
            {/*</ul>*/}
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Navbar