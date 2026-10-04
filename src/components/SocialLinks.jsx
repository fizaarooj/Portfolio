import Icon from './Icons'
import { profile } from '../data/profile'

const labels = { linkedin: 'LinkedIn', github: 'GitHub', instagram: 'Instagram', facebook: 'Facebook (Devsio)' }

// Only renders icons for links that have been filled in profile.js
export default function SocialLinks({ className = '' }) {
  const items = Object.entries(profile.links).filter(([, url]) => url)
  return (
    <ul className={`social ${className}`}>
      {items.map(([key, url]) => (
        <li key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${labels[key]} (opens in a new tab)`}>
            <Icon name={key} size={20} />
          </a>
        </li>
      ))}
    </ul>
  )
}
