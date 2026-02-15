import React, { useRef, useEffect } from 'react'
import Button from '../components/Button/Button'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const stars = []
    const STAR_COUNT = 140

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.4 + 0.1,
        alpha: Math.random(),
        speed: Math.random() * 0.01 + 0.002
      })
    }

    const drawBackground = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const drawStars = () => {
      stars.forEach(star => {
        star.alpha += star.speed

        const glow = star.baseAlpha + Math.sin(star.alpha) * 0.2

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.max(glow, 0)})`
        ctx.fill()
      })
    }

    const animate = () => {
      drawBackground()
      drawStars()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home">
      <div className={styles.hero}>
        <canvas ref={canvasRef} className={styles.canvas} />

        <div className={styles.content}>
          <div className={styles.header}>
          <Link to="https://github.com/vitorseha" target="_blank" rel="noopener noreferrer">
            <Button
              variant="git"
              icon={<i className="bi bi-arrow-up-right"></i>}
              >
              GitHub
            </Button>
          </Link>  
          </div>

          <div className={styles.container}>
            <div className={styles.containercn}>
              <p className={styles.frasecn}>多谢月相怜，今宵不忍圆.</p>
              <p className={styles.autor}>朱淑真</p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.containerbr}>
              <p className={styles.frasebr}>
                I thank the moon for her compassion; tonight, she did not dare to become full.
              </p>
              <p className={styles.autorbr}>ZHU SHUZHEN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
