import { Link } from 'react-router-dom'
import IconMedia from '../icons/IconMedia'
import '../styles/Footer.css'
import Github from '../icons/Github'
import Instagram from '../icons/Instagram'
import LinkedIn from '../icons/LinkedIn'

export default function Footer() {
  return (
    <footer>
      <hr />

      <nav>
        <Link to="/" className="homeLink">
          <IconMedia size="70px" />
        </Link>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/hozmel-roberto-de-la-rosa-rend%C3%B3n-8b5929329/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/hozmeldelarosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/hrdelarosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </nav>
    </footer>
  )
}
