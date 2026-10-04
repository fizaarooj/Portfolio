import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { designs, designCategories } from '../data/content'

function Lightbox({ item, onClose, onPrev, onNext, hasMany }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasMany) onPrev()
      if (e.key === 'ArrowRight' && hasMany) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext, hasMany])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={22} />
        </button>
        <div className="lightbox__image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="lightbox__info">
          <span className="eyebrow">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.tools?.length > 0 && (
            <>
              <h4>Tools used</h4>
              <ul className="pill-list pill-list--small">
                {item.tools.map((t) => (
                  <li className="pill" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </>
          )}
          {hasMany && (
            <div className="lightbox__nav">
              <button type="button" className="btn btn--ghost btn--sm" onClick={onPrev}>
                Previous
              </button>
              <button type="button" className="btn btn--ghost btn--sm" onClick={onNext}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DesignGallery() {
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState(null)

  const visible = filter === 'All' ? designs : designs.filter((d) => d.category === filter)
  const openIndex = visible.findIndex((d) => d.id === openId)
  const current = openIndex >= 0 ? visible[openIndex] : null

  const go = (dir) => {
    const next = (openIndex + dir + visible.length) % visible.length
    setOpenId(visible[next].id)
  }

  return (
    <section id="design" className="section" aria-labelledby="design-title">
      <div className="container">
        <SectionHeading
          eyebrow="Design portfolio"
          title="Graphic design gallery"
          intro="Branding, social media, posters and more. Select a piece to see the details."
        />

        <div className="filters" role="group" aria-label="Filter design work by category">
          {designCategories
            .filter((c) => c === 'All' || designs.length === 0 || designs.some((d) => d.category === c))
            .map((c) => (
            <button
              key={c}
              type="button"
              className={`filter ${filter === c ? 'is-active' : ''}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {designs.length === 0 ? (
          <Reveal className="card gallery-empty">
            <span className="icon-chip">
              <Icon name="image" size={24} />
            </span>
            <h3>Design work is being added</h3>
            <p>
              My selected graphic-design projects will appear here. In the meantime, you can reach
              me for samples at{' '}
              <a href="#contact">the contact section</a>.
            </p>
          </Reveal>
        ) : visible.length === 0 ? (
          <p className="gallery-none">No work in this category yet.</p>
        ) : (
          <div className="masonry">
            {visible.map((d) => (
              <button
                key={d.id}
                type="button"
                className="masonry__item"
                onClick={() => setOpenId(d.id)}
                aria-label={`Open ${d.title}`}
              >
                <img src={d.image} alt={d.title} loading="lazy" />
                <span className="masonry__overlay">
                  <small>{d.category}</small>
                  <strong>{d.title}</strong>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {current && (
        <Lightbox
          item={current}
          onClose={() => setOpenId(null)}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
          hasMany={visible.length > 1}
        />
      )}
    </section>
  )
}
