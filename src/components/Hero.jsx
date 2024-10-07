import { Link } from 'react-router-dom'
import { useRandomTrending } from '../hooks/useRandomTrending'
import { useOpacity } from '../hooks/useOpacity'
import MediaType from '../icons/MediaType'
import Loader from './Loader'
import { replaceSpace } from '../utils/replaceSpace'
import '../styles/Hero.css'

export default function Hero() {
  const { media, loading } = useRandomTrending()
  const { opacity } = useOpacity(loading)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{ opacity: opacity, transition: 'opacity 1s ease-in-out' }}
          className="hero"
        >
          <div className="backdrop">
            <img
              style={{
                opacity: opacity,
                transition: 'opacity 2.3s ease-in-out',
              }}
              src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
              alt={`Backdrop Path of ${media.name || media.title}`}
            />
          </div>

          <div className="information-media">
            <div className="media-type">
              <MediaType media_type={media.media_type} />
              <span>{media.media_type && media.media_type.toUpperCase()}</span>
            </div>

            <h3>{media.name || media.title}</h3>
            <p>{media.overview}</p>
          </div>

          <div className="content-btn">
            <Link
              to={
                media.media_type === 'movie'
                  ? `/movie/${media.id}-${
                      replaceSpace(media.name) || replaceSpace(media.title)
                    }`
                  : `/serie/${media.id}-${
                      replaceSpace(media.name) || replaceSpace(media.title)
                    }`
              }
              // to={`/movie/${media.id}-${
              //   replaceSpace(media.name) || replaceSpace(media.title)
              // }`}
              className="btn-more"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
              <span>More information</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
