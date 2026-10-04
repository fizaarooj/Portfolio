import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icons'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'

// Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in a .env file to send
// messages straight to your inbox. Without it, the form opens the visitor's email app.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
        setValues(empty)
      } catch {
        setStatus('error')
      }
      return
    }
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="section section--dark" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <span className="eyebrow">Contact</span>
          <h2 id="contact-title">Let&rsquo;s Work Together</h2>
          <p>
            I&rsquo;m always open to creative opportunities, internships, collaborations, and
            interesting projects.
          </p>
          <ul className="contact__list">
            <li>
              <Icon name="mail" size={20} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="phone" size={20} />
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={20} />
              <span>{profile.location}</span>
            </li>
          </ul>
          <SocialLinks className="social--light" />
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label>
                Name
                <input name="name" type="text" required autoComplete="name" value={values.name} onChange={onChange} />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" type="text" required value={values.subject} onChange={onChange} />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required value={values.message} onChange={onChange} />
            </label>
            <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'} <Icon name="arrow" size={18} />
            </button>
            <p className="form__status" role="status" aria-live="polite">
              {status === 'sent' &&
                (ENDPOINT
                  ? 'Thank you — your message has been sent.'
                  : 'Your email app should open with the message ready to send.')}
              {status === 'error' &&
                `Something went wrong. Please email me directly at ${profile.email}.`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
