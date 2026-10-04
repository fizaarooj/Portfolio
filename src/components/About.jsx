import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { aboutPoints, stats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading eyebrow="About me" title="Where creativity meets code" />

        <div className="about__grid">
          <Reveal className="about__text">
            <p>
              I&rsquo;m a Computer Science undergraduate at CUST, Islamabad, with hands-on
              front-end and full-stack internship experience and a strong foundation in programming,
              web technologies and problem-solving. I enjoy turning ideas into interfaces that look
              considered and work reliably.
            </p>
            <ul className="checklist">
              {aboutPoints.map((p) => (
                <li key={p}>
                  <span className="checklist__icon">
                    <Icon name="check" size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="stats" delay={120}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
