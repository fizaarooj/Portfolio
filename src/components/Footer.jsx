import SocialLinks from './SocialLinks'
import { navItems } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; 2026 Fiza Arooj. All Rights Reserved.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
    </footer>
  )
}
