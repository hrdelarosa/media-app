import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="homeLink">
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#67fb15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M16 3l-4 4l-4 -4" />
          </svg>

          <span>PopStar</span>
        </Link>

        <ul className="navLink">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'isActive' : 'pageLink')}
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={({ isActive }) => (isActive ? 'isActive' : 'pageLink')}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              className={({ isActive }) => (isActive ? 'isActive' : 'pageLink')}
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) => (isActive ? 'isActive' : 'pageLink')}
            >
              People
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
