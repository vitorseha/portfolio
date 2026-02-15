import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Design.module.css'
import Button from '../components/Button/Button'

const Design = () => {

  const [contactType, setContactType] = useState("email")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New message from ${formData.name}`

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `

    window.location.href =
      `mailto:vserra.contact@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="design">
      <div className={styles.section}>
        <div className={styles.container}>

          <div className={styles.left}>
            <div className={styles.titlecontainer}>
              <h2 className={styles.title}>contact me</h2>
              <p>
                If you're interested in collaborating or hiring me, I'd be happy to hear from you. Feel free to reach out.
              </p>
            </div>
          </div>

          <div className={styles.info}>
            <div>
              <h4 className={styles.label}>LOCATION</h4>
              <p>São Paulo, Brazil</p>
              <p>Hybrid opportunities & freelance projects</p>
            </div>

            <div>
              <h4 className={styles.label}>MY CONTACTS</h4>
              <p>vserra.contact@gmail.com</p>
              <p>+55 11 9 7700 6115</p>
            </div>
          </div>

          <div className={styles.formCardContainer}>

            <div className={styles.formCard}>

              {/* BOTÕES */}
              <div className={styles.switchButtons}>
                <button
                  type="button"
                  className={contactType === "email" ? styles.active : ""}
                  onClick={() => setContactType("email")}
                >
                  Email
                </button>

                <button
                  type="button"
                  className={contactType === "whatsapp" ? styles.active : ""}
                  onClick={() => setContactType("whatsapp")}
                >
                  WhatsApp
                </button>
              </div>

              {contactType === "email" && (
                <>
                  <p className={styles.formTitle}>{"Let's Work Together"}</p>

                  <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name or Company"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <div className={styles.formFooter}>
                      <Button
                        type="submit"
                        variant="black"
                        icon={<i className="bi bi-arrow-right" />}
                      >
                        SEND MESSAGE
                      </Button>
                    </div>
                  </form>
                </>
              )}

              {contactType === "whatsapp" && (
                <div className={styles.whatsappContainer}>
                  <img
                    src="/qrwpp.jpeg"
                    alt="WhatsApp QR Code"
                    className={styles.whatsappImage}
                    draggable="false"
                  />
                  <p>Scan to contact me on WhatsApp.</p>
                </div>
              )}

            </div>

            <div className={styles.socialContainer}>
              <Link
                to="https://www.linkedin.com/in/vitorseha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.icon}>
                  <i className="devicon-linkedin-plain"></i>
                  <p>/vitorseha</p>
                </div>
              </Link>
              <p>Stay updated with my work.</p>
            </div>

          </div>
        </div>
          <p> © 2025 - 2026 Seha. All rights reserved. </p>
      </div>
    </section>
  )
}

export default Design
