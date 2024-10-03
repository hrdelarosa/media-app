import { Link } from 'react-router-dom'
import NoImage from '../../icons/NoImage'

export default function NoPosterMediaPeople({ media }) {
  return (
    <Link className="content-no-poster-people">
      <div className="no-poster-people">
        <div className="no-people">
          <span className="no-poster">No Poster</span>
          <NoImage size="55" />
        </div>

        <h3>{media.name || media.title}</h3>
      </div>
    </Link>
  )
}
