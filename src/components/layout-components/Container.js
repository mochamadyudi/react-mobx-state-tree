import React from 'react'
import PropTypes from 'prop-types'
import StyledChildren from './StyledChildren'
import Utils from '../../utils'

const Container = (props)=> {
  return (
    <div className={`${Utils.getMaxWidth(props.size)} w-full mx-auto h-full`}>
      {
        typeof(props.children) !== "undefined" && (
          <StyledChildren children={props.children}/>
        )
      }
     </div>
  )
}

Container.propTypes = {
  size: PropTypes.string.isRequired
}
Container.defaultProps = {
  size: "2xl"
}

export default Container