import React from 'react'
import Button from '../components/Button/Button'
import styles from './Backend.module.css'
import Imagem from '../assets/profile.png';

const Backend = () => {

  const handleClick = () => {
    const section = document.getElementById("motion")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="backend" aria-labelledby="backend-title">
      <div className={styles.container}>

        <div className={styles.image}>
           <img
              className={styles.img}
              src={Imagem}
              alt="A man holding a component card simulating your profile."
              draggable="false"
            />
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
            onClick={handleClick}
          >
            See projects
          </Button>
        </div>

      </div>
    </section>
  )
}

export default Backend
