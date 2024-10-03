import Layout from '../layouts/Layout'
import Details from '../components/movie/Details'
import ImageSlider from '../components/ImageSlider'
import CastMedia from '../components/cast/CastMedia'
import TrailerInformation from '../components/TrailerInformation'
import Recommendations from '../components/Recommendations'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { useOpacity } from '../hooks/useOpacity'

import '../styles/movieDetails.css'

export default function MovieDetails() {
  const { id } = useParams()
  const {
    loading,
    movie,
    images,
    cast,
    director,
    trailer,
    keywords,
    recommen,
  } = useMovieDetails({
    id,
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
          <Details movie={movie} director={director} />

          <TrailerInformation
            trailer={trailer}
            movie={movie}
            keywords={keywords}
          />

          <CastMedia cast={cast} />

          <ImageSlider images={images} name={movie.name || movie.title} />

          <Recommendations recommen={recommen} />
        </main>
      )}
    </Layout>
  )
}
