import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { Link } from 'react-router-dom';

const Motion = () => {
  return (
    <section id="motion">
      <div className={styles.grid}>

        <Link to="/project/share-component" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="share component"
            category="frontend"
            backgroundColor="#2a2529"
            />
          </Link>

        <Link to="/project/menu-overlay" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="orverlay menu"
            category="frontend"
            backgroundColor="#2a2529"
            />
        </Link>

        <Link to="https://www.figma.com/design/tJm8vUadrzX3apAENGyVPe/Design-System?node-id=0-1&t=qGNY1NEy0P43sEqY-1" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="ihc fatec"
            category="frontend"
            backgroundColor="#DA4F37"
          />
        </Link>

        <Link to="https://www.figma.com/proto/sAsbOQlCP4L5LFp7xTyh2V/MT-Solu%C3%A7%C3%B5es---Leiaute?node-id=0-1&t=GEXYo6qOg0agLXix-1" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="mt soluções"
            category="frontend"
             backgroundColor="#0094C7"
          />
        </Link>

        <Link to="https://www.figma.com/proto/NfHkuIIV9LhqBheLumX0Pc/MT-Solu%C3%A7%C3%B5es---Linkedin-Cover?node-id=0-1&t=qzp6RieiHjXmEN3o-1" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="mt soluções"
            category="design"
             backgroundColor="#00CFC7"
          />
        </Link>

        <Link to="https://www.figma.com/proto/MKxJuofgRCvXIhSUBPspRB/Crisalina---Moda-Feminina?node-id=0-1&t=qGNY1NEy0P43sEqY-1" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="crisalina"
            category="design"
            backgroundImage="https://acdn-us.mitiendanube.com/stores/005/155/625/products/23-a8e2942b46419bbeff17537930032257-1024-1024.webp"
            />
        </Link>

      </div>
    </section>
  )
}

export default Motion