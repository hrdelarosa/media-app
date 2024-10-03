import { Link } from 'react-router-dom'
import { replaceSpace } from '../../utils/replaceSpace'

export default function Media({ media }) {
  return (
    <Link
      to={`/movie/${media.id}-${
        replaceSpace(media.name) || replaceSpace(media.title)
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="content-media"
    >
      <img
        className="image-media"
        src={`https://image.tmdb.org/t/p/w342${media.poster_path}`}
        alt={`Movie poster for ${media.name || media.title}`}
      />

      {media.character && <span>{media.character}</span>}
    </Link>
  )
}
