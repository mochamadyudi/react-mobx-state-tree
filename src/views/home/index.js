import React from 'react'
import PropTypes from 'prop-types'
import CardAnalytics from '../../components/shared-components/card/card-analytics'

const Home = (props) => {
  return (
    <div className='w-full space-y-6'>
      <h1 title={'home'}>Home</h1>

      <div className='flex flex-wrap gap-4 w-full'>
        {[0,1,3].map((item,index)=> {
          return (
            <div className='col-span-4'>
              <CardAnalytics
                title={'People'}
                subTitle={'Total People'}
                total={100}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home