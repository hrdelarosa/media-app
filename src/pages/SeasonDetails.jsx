import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { useSeasonDetail } from '../hooks/useSeasonDetails'
import Loader from '../components/Loader'
import { useOpacity } from '../hooks/useOpacity'

import '../styles/seasonDetails.css'
import { nameSerieId } from '../utils/nameSerie'
import Episode from '../components/serie/season/Episode'
import DetailsItems from '../components/DetailsItems'
import RatingStars from '../components/RatingStars'

export default function SeasonDetails() {
  const { id, seasonId } = useParams()
  const number_seasons = seasonId.split('-')
  const nameSerie = nameSerieId({ id })
  const { loading, season } = useSeasonDetail({
    id,
    number_season: number_seasons[1],
  })
  const { opacity } = useOpacity(loading)

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <main
          style={{
            opacity: opacity,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <div className="season-information">
            <div className="content-image-season">
              <img
                src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                alt={`Still of episode ${season.season_number}`}
              />
            </div>
            <div className="info-season">
              <h1>
                {nameSerie.replace(/-/g, ' ')} - Season {number_seasons[1]} (
                {season.name})
              </h1>
              <div className="season-details">
                <DetailsItems title="Air date">
                  <span>{season.air_date}</span>
                </DetailsItems>

                <DetailsItems title="Episodes">
                  <span>{season.episodes.length}</span>
                </DetailsItems>
              </div>
              <RatingStars rating={season.vote_average} />
            </div>
          </div>

          <section className="content-episodes">
            {season.episodes.map((episode, i) => (
              <Episode key={i} episode={episode} i={i} />
            ))}
          </section>
        </main>
      )}
    </Layout>
  )
}
