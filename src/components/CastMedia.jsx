import ProfileNoImage from './ProfileNoImage'
import '../styles/Cast.css'

export default function CastMedia({ cast }) {
  return (
    <div className="cast">
      <h2>Cast</h2>
      <div className="content-cast">
        {cast &&
          cast.map((person, i) => (
            <div key={i} className="profile-cast">
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
            </div>
          ))}
      </div>
    </div>
  )
}
