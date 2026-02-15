import React from 'react'
import './NavigationItem.css'

const NavigationItem = ({ navicon, label, targetId, isActive }) => {

  const handleClick = () => {
    const section = document.getElementById(targetId)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`nav-container ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="nav-icon">{navicon}</div>
      <span className="nav-label">{label}</span>
    </div>
  )
}

export default NavigationItem
