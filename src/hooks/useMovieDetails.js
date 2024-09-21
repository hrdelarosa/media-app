import { useEffect, useState } from 'react'
import { movieDetails } from '../services/movieDetails'
import { movieCredits } from '../services/movieCredits'
import { movieImages } from '../services/movieImages'

export function useMovieDetails({ id }) {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  const [director, setDirector] = useState({})
  const [images, setImages] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    movieDetails({ id })
      .then((movie) => setMovie(movie))
      .catch((e) => setError(e))

    movieCredits({id})
    .then((credits) => {
      setCast(credits.cast)
      credits.crew.map((director) => (director.job === 'Director' && setDirector(director)))
    })
    // .catch((e) => setError(e))

    movieImages({id})
    .then((img) => setImages(img.backdrops))
  }, [id])

  return { movie, cast, director, images, error }
}
