import React from 'react'
import './HeaderModal.css'

const HeaderModal = ({ text, onClose }) => {
  return (
    <div className="title-container">
      <div className="title">{text}</div>

      <div className="esc-container">
        <div className='esc'>
            ESC
        </div>
        <i className="bi bi-x" onClick={onClose}></i>
      </div>
    </div>
  )
}

export default HeaderModal