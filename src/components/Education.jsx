import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { education, certifications, leadership } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section section--tint" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="edu__grid">
          <ol className="timeline timeline--compact">
            {education.map((e, i) => (
              <Reveal as="li" className="timeline__item" key={e.degree} delay={i * 100}>
                <span className="timeline__dot" aria-hidden="true" />
                <article className="card edu-card">
                  <header className="exp-card__head">
                    <div>
                      <h3>{e.degree}</h3>
                      <p className="exp-card__company">{e.school}</p>
                    </div>
                    {e.period && <span className="date-chip">{e.period}</span>}
                  </header>
                  {e.points.length > 0 && (
                    <ul className="bullets">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </ol>

          <Reveal className="card extras" delay={120}>
            <h3>
              <Icon name="award" size={20} /> Certifications
            </h3>
            <ul className="bullets">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3>
              <Icon name="briefcase" size={20} /> Leadership &amp; activities
            </h3>
            <ul className="bullets">
              {leadership.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
