import { Link } from 'react-router-dom'
import { replaceSpace } from '../../utils/replaceSpace'

export default function Season({ season, serie }) {
  console.log(season)
  return (
    <>
      {season.name === 'Specials' ? (
        <></>
      ) : (
        <Link
          to={`/serie/${serie.id}-${replaceSpace(serie.name)}/season/${
            season.id
          }-${season.season_number}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="content-season"
        >
          <img
            className="image-season"
            src={`https://image.tmdb.org/t/p/w342${season.poster_path}`}
            alt={`Season poster for ${season.name}`}
          />

          <span>Season {season.season_number}</span>
        </Link>
      )}
    </>
  )
}
