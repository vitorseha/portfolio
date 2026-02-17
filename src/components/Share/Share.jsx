import React, { useState } from 'react'
import styles from './Share.module.css'

const Share = () => {
  const [inviteEnabled, setInviteEnabled] = useState(false)

  return (
    <div className={styles.shareContainer}> 
      <div className={styles.card}>

        <div className={styles.titleContainer}>
          <div className={styles.title}>Share</div>
          <div className={styles.escContainer}>
            <div className={styles.esc}>ESC</div>
            <i className="bi bi-x"></i>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.containerIcon}>
              <i className="bi bi-globe"></i>
            </div>

            <div>
              <div className={styles.containerTitle}>
                {inviteEnabled ? 'Private' : 'Anyone'}
              </div>

              <div className={styles.containerDescription}>
                {inviteEnabled
                  ? 'Only invited people can access'
                  : 'Anyone with the link can access'}
              </div>
            </div>
          </div>

          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={inviteEnabled}
              onChange={() => setInviteEnabled(!inviteEnabled)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.linkPathContainer}>
          <div className={styles.linkPath}>
            example.com/invite-link/123456789
          </div>
          <div className={styles.icon}>
            <i className="bi bi-copy"></i>
          </div>
        </div>

        {inviteEnabled && (
          <>
            <div className={styles.invite}>Invite</div>

            <div className={styles.searchBar}>
              <i className="bi bi-person-add"></i>

              <input
                className={styles.inputSearchBar}
                type="email"
                placeholder="Enter email to share"
              />

              <button className={styles.inviteButton}>
                Invite
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Share
