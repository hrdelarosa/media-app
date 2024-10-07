import RatingStars from '../RatingStars'
import DetailsItems from '../DetailsItems'
import Created from '../../icons/Created'

import { isProduction } from '../../utils/inProductionText'
import { genderPeople } from '../../utils/genderPeople'
import '../../styles/detailsSerie.css'

export default function Details({ serie }) {
  return (
    <section className="serie-details">
      <div className="details-serie-contentent">
        <div className="poster-serie">
          <img
            src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
            alt={`serie poster for ${serie.name}`}
          />
        </div>

        <div className="information-serie">
          <h1>{serie.name}</h1>

          <div className="summary-serie">
            <span className="title-details">Summary</span>
            <p className="text-details">{serie.overview}</p>
          </div>

          <div className="content-details-serie">
            <div className="details-serie">
              <DetailsItems title="Seasons">
                <p className="text-details">{serie.number_of_seasons}</p>
              </DetailsItems>

              <DetailsItems title="Genres">
                <ul className="genres">
                  {serie.genres &&
                    serie.genres.map((genere, i) => (
                      <li key={i} className="text-details">
                        {genere.name}
                      </li>
                    ))}
                </ul>
              </DetailsItems>

              <DetailsItems title="Rating">
                <RatingStars rating={serie.vote_average} />
              </DetailsItems>

              <DetailsItems title="Status">
                <p className="text-details">{serie.status}</p>
              </DetailsItems>
            </div>

            <div className="details-serie">
              <DetailsItems title="Episodes">
                <p className="text-details">{serie.number_of_episodes}</p>
              </DetailsItems>

              <DetailsItems title="In production">
                <p className="text-details">
                  {isProduction(serie.in_production)}
                </p>
              </DetailsItems>

              <DetailsItems title="First air date">
                <p className="text-details">{serie.first_air_date}</p>
              </DetailsItems>

              <DetailsItems title="Last air date">
                <p className="text-details">{serie.last_air_date}</p>
              </DetailsItems>
            </div>
          </div>

          {serie.created_by.length > 0 && (
            <div className="content-created-by">
              <div className="image-created-by">
                {serie.created_by[0].profile_path ? (
                  <img
                    className="img-created"
                    src={`https://image.tmdb.org/t/p/w154${serie.created_by[0].profile_path}`}
                    alt={`Profile picture of ${serie.created_by[0].name}`}
                  />
                ) : (
                  <Created />
                )}
              </div>

              <div className="name-sex">
                <span className="title-details">Created by</span>
                <p>{serie.created_by[0].name}</p>
                <small>{genderPeople(serie.created_by[0].gender)}</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
