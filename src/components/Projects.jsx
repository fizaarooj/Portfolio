import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { projects } from '../data/content'

// A neutral, abstract UI illustration used when no real screenshot has been added yet.
// It is drawn in CSS and does not depict the actual company system.
function AbstractPreview({ kind }) {
  return (
    <div className={`preview preview--${kind}`} aria-hidden="true">
      <div className="preview__bar">
        <i /><i /><i />
      </div>
      {kind === 'dashboard' ? (
        <div className="preview__body">
          <div className="preview__side">
            <b /><b /><b /><b />
          </div>
          <div className="preview__main">
            <div className="preview__cards"><u /><u /><u /></div>
            <div className="preview__chart">
              <s style={{ height: '40%' }} /><s style={{ height: '65%' }} /><s style={{ height: '50%' }} />
              <s style={{ height: '80%' }} /><s style={{ height: '60%' }} /><s style={{ height: '90%' }} />
            </div>
            <div className="preview__rows"><em /><em /><em /></div>
          </div>
        </div>
      ) : (
        <div className="preview__body preview__body--form">
          <div className="preview__form">
            <span /><em /><em /><em /><strong />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--tint" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          intro="Professional and internship projects I have contributed to."
        />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal as="article" className="card project-card" key={p.title} delay={i * 100}>
              <div className="project-card__media">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                ) : (
                  <AbstractPreview kind={p.preview} />
                )}
              </div>
              <div className="project-card__body">
                <span className="eyebrow">{p.kind}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="pill-list pill-list--small">
                  {p.tags.map((t) => (
                    <li className="pill" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="project-card__actions">
                  {p.links.demo && (
                    <a
                      className="btn btn--primary btn--sm"
                      href={p.links.demo}
                      {...(p.links.demo.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {p.demoLabel || 'View Project'}{' '}
                      <Icon name={p.links.demo.startsWith('#') ? 'arrow' : 'external'} size={16} />
                    </a>
                  )}
                  {p.links.code && (
                    <a className="btn btn--ghost btn--sm" href={p.links.code} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" size={16} /> GitHub
                    </a>
                  )}
                  {!p.links.demo && !p.links.code && p.note && <p className="note">{p.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
