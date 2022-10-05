import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props)=> {
  switch (props.cover){
    case "page":
      return (
        <div className={'fixed flex items-center justify-center h-screen w-screen bg-black opacity-50'} data-testId={1} title={`loading-${props.cover}`}>
          <span>Loading...</span>
        </div>
      )
    case "sub-page":
      return (
        <div className={''} data-testId={1} title={`loading-${props.cover}`}>
          <span>{props.cover}</span>
        </div>
      )
    case "component":
      return (
        <div className={''} data-testId={1} title={`loading-${props.cover}`}>
          <span>{props.cover}</span>
        </div>
      )
    default:
      return (
        <div className={''} data-testId={1} title={'loading-default'}>
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