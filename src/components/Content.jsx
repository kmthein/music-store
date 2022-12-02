import React from 'react'
import Card from './Card'

const Content = ({songs}) => {
  return (
    <div className='bg-zinc-800 content'>
        <div className='track-container'>
            <Card songs={songs} />
        </div>
    </div>
  )
}

export default Content