import React from 'react'
import './MenuItem.css'

const MenuItem = ({icon, label}) => {
  return (
    <div className='icon-container' >
        <div className='icon-icon'>{icon}</div>
        <div className='icon-title'>{label}</div>
    </div>
  )
}

export default MenuItem