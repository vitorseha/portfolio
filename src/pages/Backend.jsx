import React from 'react'
import Button from '../components/Button/Button'
import styles from './Backend.module.css'

const Backend = () => {
  return (
    <section id="backend" aria-labelledby="backend-title">
      <div className={styles.container}>

        <div className={styles.image}>
          {'<imagem>'}
        </div>

        <div className={styles.content}>
          <h2 id="backend-title">Portfolio</h2>
          <h3 className={styles.subtitle}>Backend Developer</h3>

          <div className={styles.line} />

          <p className={styles.description}>
            I develop fullstack applications from database modeling to production deployment, building REST APIs with JWT authentication, layered architecture, and integration with relational databases.
          </p>

          <Button
            icon={<i className="bi bi-arrow-right" />}
            variant="transparent"
          >
            See projects
          </Button>
        </div>

      </div>
    </section>
  )
}

export default Backend
