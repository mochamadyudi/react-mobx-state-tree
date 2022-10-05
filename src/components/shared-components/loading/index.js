import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props)=> {
  switch (props.cover){
    case "page":
      return (
        <div className={'fixed flex items-center justify-center h-full w-full top-0 left-0 bg-white z-40'} datatestid={1} title={`loading-${props.cover}`}>
          <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </div>
      )
    case "sub-page":
      return (
        <div className={''} datatestid={1} title={`loading-${props.cover}`}>
          <span>{props.cover}</span>
        </div>
      )
    case "component":
      return (
        <div className={''} datatestid={1} title={`loading-${props.cover}`}>
          <span>{props.cover}</span>
        </div>
      )
    default:
      return (
        <div className={''} datatestid={1} title={'loading-default'}>
          <span>Default</span>
        </div>
      )
  }

}

Loading.propTypes = {
  cover: PropTypes.string.isRequired
}
Loading.defaultProps = {
  cover: "page"
}

export default Loading