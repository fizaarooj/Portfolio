import Icon from './Icons'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow">{profile.tagline}</span>
          <h1 id="hero-title">
            Hi, I&rsquo;m <span className="accent-text">{profile.name}</span>
          </h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__intro">
            I combine creativity, graphic design, frontend development and computer science to build
            visually appealing, functional digital experiences &mdash; from clean interfaces to the
            systems that power them.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work <Icon name="arrow" size={18} />
            </a>
            <a href={profile.cv} download className="btn btn--ghost">
              <Icon name="download" size={18} /> Download CV
            </a>
          </div>

          <SocialLinks className="hero__social" />
        </div>

        <div className="hero__visual">
          <div className="hero__blob" aria-hidden="true" />
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__frame">
            <img
              src={profile.photo}
              alt="Portrait of Fiza Arooj"
              width="1254"
              height="1254"
              fetchpriority="high"
            />
          </div>
          <div className="hero__badge hero__badge--a" aria-hidden="true">
            <Icon name="palette" size={18} /> Design
          </div>
          <div className="hero__badge hero__badge--b" aria-hidden="true">
            <Icon name="code" size={18} /> Code
          </div>
        </div>
      </div>
    </section>
  )
}
