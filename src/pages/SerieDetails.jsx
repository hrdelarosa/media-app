import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { useSerieDetails } from '../hooks/useSerieDetails'
import Loader from '../components/Loader'
import { useOpacity } from '../hooks/useOpacity'
import Details from '../components/serie/Details'
import TrailerInformation from '../components/TrailerInformation'
import ContentSeasons from '../components/media/ContentSeasons'
import CastMedia from '../components/cast/CastMedia'
import Recommendations from '../components/Recommendations'
import ImageSlider from '../components/ImageSlider'

export default function SerieDetails() {
  const { id } = useParams()
  const { loading, serie, cast, images, trailer, keywords, recommen } =
    useSerieDetails({
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
          <Details serie={serie} />

          <TrailerInformation
            trailer={trailer}
            movie={serie}
            keywords={keywords}
          />

          <CastMedia cast={cast} />

          <div className="seasons">
            <h2>Seasons</h2>

            <ContentSeasons serie={serie} />
          </div>

          <ImageSlider images={images} name={serie.name} />

          <Recommendations recommen={recommen} />
        </main>
      )}
    </Layout>
  )
}
