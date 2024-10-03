import { Link } from 'react-router-dom'
import { replaceSpace } from '../../utils/replaceSpace'
import NoPosterMediaPeople from './NoPosterMediaPeople'

export default function KnownMedia({ medias }) {
  return (
    <div className="known">
      {medias &&
        medias.slice(0, 9).map((media, i) =>
          media.poster_path ? (
            <Link
              to={`/movie/${media.id}-${
                replaceSpace(media.name) || replaceSpace(media.title)
              }`}
              className="conten-image-known"
              key={i}
            >
              <img
                className="image-known"
                src={`https://image.tmdb.org/t/p/w185${media.poster_path}`}
                alt={`Movie poster for ${media.name || media.title}`}
              />
            </Link>
          ) : (
            <NoPosterMediaPeople key={i} media={media} />
          )
        )}
    </div>
  )
}
