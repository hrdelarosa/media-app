import { runtime } from '../../../utils/formatRunTime'
import RatingStars from '../../RatingStars'

export default function Episode({ episode, i }) {
  return (
    <div className="episode">
      <div className="episode-image">
        {episode.still_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
            alt={`Still of episode ${episode.season_number}`}
          />
        ) : (
          <span className="coming">Coming soon</span>
        )}
      </div>
      <div className="episode-information">
        <div className="title-runtime">
          <div className="title-date">
            <span>
              Episode {i + 1}{' '}
              {episode.name.startsWith('Episode') ? '' : `- ${episode.name}`}
            </span>
            <small>{episode.air_date}</small>
          </div>
        </div>
        <p>{episode.overview}</p>
      </div>

      <div className="episode-more-information">
        {episode.runtime ? (
          <span className="runtime">{runtime(episode.runtime)}</span>
        ) : (
          <span className="runtime">-- --</span>
        )}
        <RatingStars rating={episode.vote_average} />
      </div>
    </div>
  )
}
