import React, { useState } from 'react'
import './Share.css'

const Share = () => {
  const [inviteEnabled, setInviteEnabled] = useState(false)

  return (
    <div className="card">

      <div className='title-container'>
        <div className="title">Share</div>
        <div className='esc-container'>
          <div className='esc'>
            ESC
          </div>
          <i class="bi bi-x"></i>
        </div>

      </div>
      

      <div className="container">
        <div className="content-container">
          <div className="container-icon">
            <i
              className={'bi bi-globe'}
            ></i>
          </div>

          <div>
            <div className="container-title">
              {inviteEnabled ? 'Private' : 'Anyone'}
            </div>

            <div className="container-description">
              {inviteEnabled
                ? 'Only invited people can access'
                : 'Anyone with the link can access'}
            </div>
          </div>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={inviteEnabled}
            onChange={() => setInviteEnabled(!inviteEnabled)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="link-path-container">
        <div className="link-path">
          example.com/invite-link/123456789
        </div>
        <div className="icon">
          <i className="bi bi-copy"></i>
        </div>
      </div>

      {inviteEnabled && (
        <>
          <div className="invite">Invite</div>

          <div className="search-bar">
            <i className="bi bi-person-add"></i>

            <input
              className="input-search-bar"
              type="email"
              placeholder="Enter email to share"
            />

            <button className="invite-button">
              Invite
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Share
