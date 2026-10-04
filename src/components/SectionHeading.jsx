import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}
