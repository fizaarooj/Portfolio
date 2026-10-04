import { useEffect, useState } from 'react'
import Icon from './Icons'
import { navItems, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={close} aria-label="Fiza Arooj — home">
          <span className="brand__mark">FA</span>
          <span className="brand__name">Fiza Arooj</span>
        </a>

        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={close}
                className={active === item.id ? 'is-active' : ''}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href={profile.cv} download className="btn btn--gold" onClick={close}>
              <Icon name="download" size={18} /> Download CV
            </a>
          </li>
        </ul>

        <a href={profile.cv} download className="btn btn--gold navbar__cta">
          <Icon name="download" size={18} /> Download CV
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </nav>
    </header>
  )
}
