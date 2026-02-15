import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ title, backgroundImage, category }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h3>{title}</h3>
        <h4 className={styles.subtitle}>{category}</h4>
      </div>
    </div>
  )
}

export default ProjectCard
