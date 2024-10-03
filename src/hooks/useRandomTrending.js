import { useEffect, useState } from 'react'
import { getRandomTrendingMedia } from '../services/getRandomTrendingMedia'

export function useRandomTrending() {
  const [loading, setLoading] = useState(true)
  const [media, setMedia] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    const random = Math.floor(Math.random() * 20)

    getRandomTrendingMedia()
      .then((newMedia) => {
        setMedia(newMedia.results[random])
        setLoading(false)
      })
      .catch((e) => setError(e))
  }, [])

  return { loading, media, error }
}
