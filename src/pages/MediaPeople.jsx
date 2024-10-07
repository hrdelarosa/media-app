import { Link, useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'
import ContentMedia from '../components/media/ContentMedia'
import Loader from '../components/Loader'
import { usePeopleDetails } from '../hooks/usePeopleDetails'
import { replaceSpace } from '../utils/replaceSpace'
import '../styles/MediaPeople.css'
import { useOpacity } from '../hooks/useOpacity'

export default function MediaPeople() {
  const { id } = useParams()
  const { loading, people, medias } = usePeopleDetails({ id })
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
          className="content-media-people"
        >
          <div className="name-media-people">
            <div className="name-image">
              <div className="image-people">
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/w154${people.profile_path}`}
                  alt={`Profile picture of ${people.name}`}
                />
              </div>

              <div>
                <h1>{`${people.name}'s Filmography`}</h1>
                <small>Character</small>
              </div>
            </div>

            <Link
              to={`/people/${people.id}-${replaceSpace(people.name)}`}
              className="media-people"
            >
              Biography
            </Link>
          </div>

          <ContentMedia media={medias.cast} />
        </main>
      )}
    </Layout>
  )
}
