import { useEffect, useState } from 'react'
import { movieCredits } from '../services/movieCredits' 

export function useMovieCredits({ id }) {
  const [cast, setCast] = useState({})
  const [director, setDirector] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    movieCredits({ id })
      .then((credits) => {
        setCast(credits.cast)
        setDirector(credits.crew)
      })
      .catch((e) => setError(e))
  }, [id])

  return { cast, director, error }
}
