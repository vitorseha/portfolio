import React from 'react'
import styles from './Frontend.module.css'
import ServiceCard from '../components/ServiceCard/ServiceCard'

const Frontend = () => {
  return (
    <section id="frontend">
      <div className={styles.container}>
        <div className={styles.grid}>

          <ServiceCard
            icon={<i className="devicon-nodejs-plain"></i>}
            title="Backend Architecture"
            description="Designing scalable REST APIs with layered architecture, authentication and relational databases."
          />

          <ServiceCard
            icon={<i className="devicon-react-original"></i>}
            title="Fullstack Applications"
            description="Building complete applications from database modeling to frontend integration."
          />

          <ServiceCard
            icon={<i className="devicon-docker-plain"></i>}
            title="Deployment"
            description="Containerizing applications with Docker and preparing production-ready environments."
          />

          <ServiceCard
            icon={<i class="devicon-mysql-original"></i>}
            title="Database Design"
            description="Modeling relational databases with performance, normalization and scalability in mind."
          />

        </div>
      </div>
    </section>
  )
}

export default Frontend