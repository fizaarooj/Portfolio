import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section section--tint" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          intro="A blend of design tools, web technologies and professional skills."
        />
        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal className="card skill-card" key={group.title} delay={i * 100}>
              <div className="skill-card__head">
                <span className="icon-chip">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="pill-list">
                {group.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
