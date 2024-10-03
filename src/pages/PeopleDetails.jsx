import Layout from '../layouts/Layout'
import { Link, useParams } from 'react-router-dom'
import { usePeopleDetails } from '../hooks/usePeopleDetails'
import { useOpacity } from '../hooks/useOpacity'
import DetailsItems from '../components/movie/DetailsItems'
import SocialMediaLinks from '../components/people/SocialMediaLinks'
import KnownFor from '../components/people/KnownFor'
import Loader from '../components/Loader'

import { genderPeople } from '../utils/genderPeople'
import { calculateAge } from '../logic/calculateAge'
import { replaceSpace } from '../utils/replaceSpace'
import '../styles/PeopleDetails.css'

export default function PeopleDetails() {
  const { id } = useParams()
  const { loading, people, socialMedia, medias } = usePeopleDetails({ id })
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
          className="people-details"
        >
          <section>
            <div className="content-image-profile">
              <img
                className="image-profile"
                src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
                alt={`Profile picture of ${people.name}`}
              />
            </div>

            <div className="profile-media">
              <div className="name-profile">
                <h1>{people.name}</h1>

                <Link
                  to={`/people/${people.id}-${replaceSpace(people.name)}/media`}
                  className="media-people"
                >
                  Acting
                </Link>
              </div>

              <KnownFor medias={medias.cast} />

              <div className="biography">
                <h2>Biography</h2>
                <p>{people.biography}</p>
              </div>
            </div>

            <div className="profile-social-media">
              <SocialMediaLinks socialMedia={socialMedia} />
            </div>

            <div className="about-profile">
              <DetailsItems title="Known for ">
                <span>{people.known_for_department}</span>
              </DetailsItems>

              <DetailsItems title="Place of birth">
                <span>{people.place_of_birth}</span>
              </DetailsItems>

              <DetailsItems title="Place of birth">
                <span>{people.birthday}</span>
              </DetailsItems>

              <DetailsItems title="Age">
                <span>{calculateAge(people.birthday)}</span>
              </DetailsItems>

              <DetailsItems title="Place of birth">
                <span>{genderPeople(people.gender)}</span>
              </DetailsItems>

              {people.deathday && (
                <DetailsItems title="Death day">
                  <span>{people.deathday}</span>
                </DetailsItems>
              )}
            </div>
          </section>
        </main>
      )}
    </Layout>
  )
}
