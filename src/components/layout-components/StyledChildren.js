import React from 'react'

const StyledChildren = (props) => {
  let {children} = props
  return (
    React.Children.map(children, (child, i) => {
        return child !== null && (
          React.cloneElement(child, {
            key: child,
            onClick: typeof(child.props.onClick) !== "undefined" ? child.props.onClick : function(){},
            className: `${typeof(child.props.className) !== "undefined" ? child.props.className : ""}`
          })
        )
      }

    )
  )
}

export default StyledChildren