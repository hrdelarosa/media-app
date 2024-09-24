import ArrowUp from '../icons/ArrowUp'
import DetailsItems from './movie/DetailsItems'

import '../styles/TrailerInfo.css'
import RatingStars from './RatingStars'

export default function TrailerInformation({ trailer, movie, keywords }) {
  return (
    <div className="trailer-information">
      <div className="content-trailer">
        <h2>Trailer</h2>
        <lite-youtube videoid={trailer.key}></lite-youtube>
      </div>

      <aside className="aside-info">
        <h2>More information</h2>

        <div className="itmes-more">
          <DetailsItems title="Tagline">
            <p>{movie.tagline}</p>
          </DetailsItems>

          {movie.homepage ? (
            <a
              className="homepage"
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="title-details">Homepage</span>
              <ArrowUp />
            </a>
          ) : (
            <></>
          )}

          <DetailsItems title="Keywords">
            <div className="keywords">
              {keywords.map((words, i) => (
                <span key={i} className="words">
                  {words.name}
                </span>
              ))}
            </div>
          </DetailsItems>

          <DetailsItems title="Vote average">
            <div className="vote-average">
              <span>{movie.vote_average}</span>
              <div className="votes-star">
                <RatingStars rating={movie.vote_average} />
                <small>{movie.vote_count} votes</small>
              </div>
            </div>
          </DetailsItems>
        </div>
      </aside>
    </div>
  )
}
