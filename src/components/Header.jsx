import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import IconMedia from '../icons/IconMedia'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="homeLink">
          <IconMedia />

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
