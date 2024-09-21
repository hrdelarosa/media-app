import { useEffect, useState } from 'react'
import { getRandomTrendingMedia } from '../services/getRandomTrendingMedia'

export function useRandomTrending() {
  const [media, setMedia] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    const random = Math.floor(Math.random() * 20)

    getRandomTrendingMedia()
      // .then((newMedia) => setMedia(newMedia.results[3]))
      .then((newMedia) => setMedia(newMedia.results[random]))
      .catch((e) => setError(e))
  }, [])

  return { media, error }
}
