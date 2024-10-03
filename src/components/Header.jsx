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
              to="/movies"
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
              to="/peoples"
              className={({ isActive }) => (isActive ? 'isActive' : 'pageLink')}
            >
              Peoples
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
