import React from 'react'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.description}>
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
