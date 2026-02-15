import React, { useState, useEffect } from 'react'
import './Menu.css'
import HeaderModal from '../HeaderModal'
import MenuItem from '../MenuItem/MenuItem'

const Menu = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      {/* Botão + */}
      <button className="fab" onClick={() => setOpen(true)}>
        <i className="bi bi-plus"></i>
      </button>

      {/* Overlay */}
      <div
        className={`overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div
          className="menu-card"
          onClick={(e) => e.stopPropagation()}
        >
          <HeaderModal
            text="Create New"
            onClose={() => setOpen(false)}
          />

          <div className="menu-container">
            <MenuItem icon={<i className="bi bi-folder"></i>} label="Folder" />
            <MenuItem icon={<i className="bi bi-clipboard"></i>} label="Task" />
            <MenuItem icon={<i className="bi bi-stickies"></i>} label="Note" />

            <MenuItem icon={<i className="bi bi-trophy"></i>} label="Goal" />
            <MenuItem icon={<i className="bi bi-flag"></i>} label="Milestone" />
            <MenuItem icon={<i className="bi bi-calendar-check"></i>} label="Reminder" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
