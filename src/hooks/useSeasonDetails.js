import { useEffect, useState } from 'react'
import { seasonDetails } from '../services/serie/seasonDetails'

export function useSeasonDetail({ id, number_season }) {
  const [loading, setLoading] = useState(true)
  const [season, setSeason] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    seasonDetails({ id, number_season })
      .then((season) => {
        setSeason(season)
        setLoading(false)
      })
      .catch((e) => setError(e))
  }, [id, number_season])

  return { loading, season, error }
}
