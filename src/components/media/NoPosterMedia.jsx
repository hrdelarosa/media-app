import { Link } from 'react-router-dom'
import NoImage from '../../icons/NoImage'
import { replaceSpace } from '../../utils/replaceSpace'

export default function NoPosterMedia({ media }) {
  return (
    <Link
      to={`/movie/${media.id}-${
        replaceSpace(media.name) || replaceSpace(media.title)
      }`}
      className="content-no-poster"
    >
      <div className="info-poster">
        <div className="no-poster">
          <span>No Poster</span>
          <NoImage />
        </div>

        <h3>{media.name || media.title}</h3>
      </div>

      {media.character ? (
        <span className="character">{media.character}</span>
      ) : (
        <span className="character">Not known</span>
      )}
    </Link>
  )
}
