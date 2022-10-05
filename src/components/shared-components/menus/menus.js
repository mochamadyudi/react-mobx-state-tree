import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'

const Menus = ({ menu }) => {
  return Array.isArray(menu) && menu.length > 0 && (
    <div className='yid-menu flex items-center gap-2' title={'menus'}>
      {
        menu.map((item, index) => {
          return <Item item={item} key={`menu-item-${index}`} />
        })
      }
    </div>
  )
}

const Item = ({ item }) => {
  const location = useLocation()
  const refSubmenu = React.useRef(null)
  const refMenuItem = React.useRef(null)
  const [active,setActive] = React.useState(null)


  const onHover = (e, type,url) => {
    if (refSubmenu && refSubmenu.current !== null) {
      if (type === 'leave') {
        setActive(null)
      } else if (type === 'enter') {
        setActive(url)
      }
    }
  }

  React.useEffect(()=> {
    if(!active){
      if(refSubmenu && refSubmenu.current){
        if(refSubmenu.current.classList.contains("deactive")){
          setTimeout(()=> {
            refSubmenu.current.classList.remove("deactive")
          },200)
        }
      }
    }
    return ()=> clearTimeout()

  },[active])

  return (
    <div className={'yid-menu-item'} ref={refMenuItem}
         data-path={active}
      onMouseEnter={(e)=> onHover(e,'enter',item.path)} onMouseLeave={(e)=> onHover(e,'leave',item.path)}
    >
      <div title={'label'} className={`yid-menu-item__label ${location.pathname === item.path ? 'active':""}`}>
        <Link to={typeof (item.path) !== 'undefined' ? item.path : '/'}>
          <span className={'lowercase'}>{item.label ? item.label : '-'}</span>
        </Link>
      </div>

      {
        typeof (item.submenu) !== 'undefined' && Array.isArray(item.submenu) && item.submenu.length > 0 && (
          <div className={`yid-menu-item__submenu ${active === item.path ? "active" : "deactive"}`} ref={refSubmenu}>
            {
              item.submenu.map((subMenuFirst, subIndex) => {
                return (
                  <Link to={typeof (subMenuFirst.path) !== 'undefined' ? subMenuFirst.path : '/'}>
                  <div title={'label'} className={`yid-menu-item__label-sub ${location.pathname === subMenuFirst.path ? 'active':""}`}>

                      <span className={'lowercase'}>{subMenuFirst.label ? subMenuFirst.label : '-'}</span>

                  </div>
                  </Link>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

Menus.propTypes = {
  menu: PropTypes.array.isRequired,
}
Menus.defaultProps = {
  menu: [],
}
Menus.Item = Item

export default Menus