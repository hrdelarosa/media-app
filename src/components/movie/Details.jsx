import RatingStars from '../RatingStars'
import DetailsItems from './DetailsItems'
import DetailsMore from './DetailsMore'

import Coin from '../../icons/Coin'
import Clock from '../../icons/Clock'
import Ticket from '../../icons/Ticket'
import DirectorChair from '../../icons/DirectorChair'

import { convertQuantity } from '../../logic/convertQuantity'
import { convertRuntime } from '../../logic/convertRuntime'

export default function Details({ movie, director }) {
  return (
    <section className="movie-details">
      <div className="details-contentent">
        <div className="poster-movie">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className="information-movie">
          <h1>{movie.name || movie.title}</h1>

          <div className="summary-movie">
            <span className="title-details">Summary</span>
            <p className="text-details">{movie.overview}</p>
          </div>

          <div className="details">
            <DetailsItems title="Rating">
              <RatingStars rating={movie.vote_average} />
            </DetailsItems>

            <DetailsItems title="Genres">
              <ul className="genres">
                {movie.genres &&
                  movie.genres.map((genere, i) => (
                    <li key={i} className="text-details">
                      {genere.name}
                    </li>
                  ))}
              </ul>
            </DetailsItems>

            <DetailsItems title="Status">
              <p className="text-details">{movie.status}</p>
            </DetailsItems>
          </div>

          <div className="content-director-date">
            <DetailsItems title="Release Date">
              <p className="text-details">{movie.release_date}</p>
            </DetailsItems>

            <div className="director">
              <DirectorChair />
              <div>
                <span className="title-details">Director</span>
                <p className="text-details">{director.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-information">
        <DetailsMore
          icon={<Clock />}
          value={`Runtime: ${convertRuntime({ runtime: movie.runtime })}`}
        />

        <DetailsMore
          icon={<Ticket />}
          value={`Revenue: ${convertQuantity({ quantity: movie.revenue })}`}
        />

        <DetailsMore
          icon={<Coin />}
          value={`Budget: ${convertQuantity({ quantity: movie.budget })}`}
        />
      </div>
    </section>
  )
}
