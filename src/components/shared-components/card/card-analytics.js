import React from 'react'
import PropTypes from 'prop-types'


const CardAnalytics = (props) => {
  return (
    <div className={'w-[320px] bg-white rounded-xl shadow min-h-[120px] p-6'} data-testId={props.testId}>
      <h3 title={props.title}>{props.title}</h3>
    </div>
  )
}

CardAnalytics.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  testId: PropTypes.number.isRequired,
}
CardAnalytics.defaultProps = {
  title: '',
  subTitle: '',
  total: 0,
}

export default CardAnalytics