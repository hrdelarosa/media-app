import Layout from '../layouts/Layout'
import Details from '../components/movie/Details'
import ImageSlider from '../components/ImageSlider'
import CastMedia from '../components/cast/CastMedia'
import TrailerInformation from '../components/TrailerInformation'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'
import Recommendations from '../components/Recommendations'

import '../styles/movieDetails.css'

export default function MovieDetails() {
  const { id } = useParams()
  const { movie, images, cast, director, trailer, keywords, recommen } =
    useMovieDetails({
      id,
    })

  // console.log(recommen)
  return (
    <Layout>
      <main>
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
    </Layout>
  )
}
