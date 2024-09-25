import Profile from './Profile'
import '../../styles/Cast.css'

export default function CastMedia({ cast }) {
  return (
    <div className="cast">
      <h2>Cast</h2>
      <div className="content-cast">
        {cast && cast.map((person, i) => <Profile key={i} person={person} />)}
      </div>
    </div>
  )
}
