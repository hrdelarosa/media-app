import { Link } from 'react-router-dom'
import { replaceSpace } from '../../utils/replaceSpace'

export default function Media({ recomm }) {
  return (
    <Link
      to={`/movie/${recomm.id}-${
        replaceSpace(recomm.name) || replaceSpace(recomm.title)
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="content-media"
    >
      <img
        className="image-media"
        src={`https://image.tmdb.org/t/p/w342${recomm.poster_path}`}
        alt={`Movie poster for ${recomm.name || recomm.title}`}
      />
    </Link>
  )
}
