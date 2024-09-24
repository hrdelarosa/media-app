import { useEffect, useState } from 'react'
import { movieDetails } from '../services/movieDetails'
import { movieCredits } from '../services/movieCredits'
import { movieImages } from '../services/movieImages'
import { getTrailerMedia } from '../services/getTrailerMedia'
import { keywordsMedia } from '../services/keywordsMedia'
import { recommendations } from '../services/recommendations'

export function useMovieDetails({ id }) {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  const [director, setDirector] = useState({})
  const [images, setImages] = useState([])
  const [trailer, setTrailer] = useState({})
  const [keywords, setKeywords] = useState([])
  const [recommen, setRecommen] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    movieDetails({ id })
      .then((movie) => setMovie(movie))
      .catch((e) => setError(e))

    movieCredits({ id }).then((credits) => {
      setCast(credits.cast)
      credits.crew.map(
        (director) => director.job === 'Director' && setDirector(director)
      )
    })

    movieImages({ id }).then((img) => setImages(img.backdrops))

    getTrailerMedia({ id }).then((trailer) =>
      trailer.results.map(
        (tri) => tri.name === 'Official Trailer' ? setTrailer(tri) : tri.name === 'Teaser Trailer' && setTrailer(tri)
      )
    )

    keywordsMedia({ id }).then((words) => setKeywords(words.keywords))

    recommendations({ id })
    .then((recommendation) => setRecommen(recommendation.results))
  }, [id])

  return { movie, cast, director, images, trailer, keywords, recommen, error }
}
