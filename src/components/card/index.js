import React from 'react'
import PropTypes from 'prop-types'

const Card = (props)=> {
    let { title, id } = props
    return (
        <div className="w-full" data-testid={id}>
            <h3 title={title}>{title}</h3>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
Card.defaultProps = {
    title: "ini titlenya",
    id:1
}

export default Card