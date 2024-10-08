import { Link } from 'react-router-dom'
import ProfileNoImage from './ProfileNoImage'
import { replaceSpace } from '../../utils/replaceSpace'

export default function Profile({ person }) {
  return (
    <Link
      to={`/people/${person.id}-${replaceSpace(person.name)}`}
      className="profile-cast"
    >
      <div className="profile">
        {person.profile_path ? (
          <img
            className="profile-img"
            src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
          />
        ) : (
          <ProfileNoImage />
        )}
      </div>
      <div className="profile-names">
        <span>{person.name}</span>
        <small>{person.character}</small>
      </div>
    </Link>
  )
}
