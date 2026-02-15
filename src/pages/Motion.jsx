import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Motion = () => {
  return (
    <section id="motion">
      <div className={styles.grid}>

        <ProjectCard
          title="E-commerce Platform"
          category="frontend"
          backgroundImage="/images/project1.jpg"
        />

        <ProjectCard
          title="Real Estate Landing Page"
          backgroundImage="/images/project2.jpg"
        />

        <ProjectCard
          title="Dashboard Analytics"
          backgroundImage="/images/project3.jpg"
        />

        <ProjectCard
          title="Portfolio Website"
          backgroundImage="/images/project4.jpg"
        />

        <ProjectCard
          title="Mobile App UI"
          backgroundImage="/images/project5.jpg"
        />

        <ProjectCard
          title="Booking System"
          backgroundImage="/images/project6.jpg"
        />

      </div>
    </section>
  )
}

export default Motion