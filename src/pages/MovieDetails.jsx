import Layout from '../layouts/Layout'
import Details from '../components/movie/Details'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'

import '../styles/movieDetails.css'
import ImageSlider from '../components/ImageSlider'

export default function MovieDetails() {
  const { id } = useParams()
  const { movie, images, cast, director } = useMovieDetails({ id })
  // console.log(cast)

  return (
    <Layout>
      <main>
        <Details movie={movie} director={director} />
        <ImageSlider images={images} />
      </main>
    </Layout>
  )
}
