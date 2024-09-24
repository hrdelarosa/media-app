import Layout from '../layouts/Layout'
import Details from '../components/movie/Details'
import ImageSlider from '../components/ImageSlider'
import CastMedia from '../components/CastMedia'
import TrailerInformation from '../components/TrailerInformation'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'

import '../styles/movieDetails.css'

export default function MovieDetails() {
  const { id } = useParams()
  const { movie, images, cast, director, trailer, keywords } = useMovieDetails({
    id,
  })

  console.log(movie)
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

        {/* <div className="reviews">
          <h2>Reviews</h2>
          <div className="content-reviews">
            <div className="information-content">
              <div className="information">
                <div className="avatar">
                  {reviews[0].author_details.avatar_path ? (
                    <img
                      className="img-avatar"
                      src={`https://image.tmdb.org/t/p/w185${reviews[0].author_details.avatar_path}`}
                      alt=""
                    />
                  ) : (
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                  )}
                </div>
                <div className="name-user">
                  <span>{reviews[0].author_details.username}</span>
                  <small>{formatDate(reviews[0].created_at)}</small>
                </div>
              </div>
              <div className="rating-star">
                <RatingStars rating={reviews[0].author_details.rating} />
              </div>
            </div>

            <p>{reviews[0].content}</p>
          </div>
        </div> */}

        <ImageSlider images={images} name={movie.name || movie.title} />
      </main>
    </Layout>
  )
}
