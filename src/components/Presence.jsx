import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { profile } from '../data/profile'

const cards = [
  { key: 'linkedin', name: 'LinkedIn', desc: 'Professional background, experience and recommendations.' },
  { key: 'github', name: 'GitHub', desc: 'Code, experiments and development projects.' },
  { key: 'instagram', name: 'Instagram', desc: 'Design work and creative updates.' },
  { key: 'facebook', name: 'Facebook · Devsio', desc: 'Updates and posts from the Devsio page.' },
]

export default function Presence() {
  return (
    <section id="presence" className="section" aria-labelledby="presence-title">
      <div className="container">
        <SectionHeading eyebrow="Find me online" title="Professional presence" />
        <div className="presence__grid">
          {cards.map((c, i) => {
            const url = profile.links[c.key]
            const inner = (
              <>
                <span className="icon-chip">
                  <Icon name={c.key} size={24} />
                </span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <span className="presence__link">
                  {url ? (
                    <>
                      Visit profile <Icon name="external" size={16} />
                    </>
                  ) : (
                    'Link coming soon'
                  )}
                </span>
              </>
            )
            return (
              <Reveal key={c.key} delay={i * 90}>
                {url ? (
                  <a
                    className="card presence-card"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} (opens in a new tab)`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card presence-card presence-card--off">{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
