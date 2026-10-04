import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I&rsquo;ve worked"
          intro="Internships and project leadership across software development and coordination."
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" className="timeline__item" key={job.company + job.period} delay={i * 80}>
              <span className="timeline__dot" aria-hidden="true" />
              <article className="card exp-card">
                <header className="exp-card__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="exp-card__company">
                      {job.company} <span>· {job.meta}</span>
                    </p>
                  </div>
                  <span className="date-chip">{job.period}</span>
                </header>
                <ul className="bullets">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="pill-list pill-list--small">
                  {job.tags.map((t) => (
                    <li className="pill" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
