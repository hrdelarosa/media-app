import Layout from '../layouts/Layout'
import Details from '../components/movie/Details'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'

import '../styles/movieDetails.css'
import ImageSlider from '../components/ImageSlider'
import CastMedia from '../components/CastMedia'

export default function MovieDetails() {
  const { id } = useParams()
  const { movie, images, cast, director } = useMovieDetails({ id })

  return (
    <Layout>
      <main>
        <Details movie={movie} director={director} />
        <CastMedia cast={cast} />
        <ImageSlider images={images} name={movie.name || movie.title} />
      </main>
    </Layout>
  )
}
