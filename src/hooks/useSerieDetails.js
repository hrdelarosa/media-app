import { useEffect, useState } from 'react'
import { serieDetails } from '../services/serie/serieDetails'
import { serieCredits } from '../services/serie/serieCredits'
import { getTrailerSerie } from '../services/serie/getTrailerSerie'
import { keywordsSerie } from '../services/serie/keywordsSerie'
import { recommendationsSerie } from '../services/serie/recommendationsSerie'
import { serieImages } from '../services/serie/serieImages'

export function useSerieDetails({ id }) {
  const [loading, setLoading] = useState(true)
  const [serie, setSerie] = useState({})
  const [cast, setCast] = useState([])
  const [images, setImages] = useState([])
  const [trailer, setTrailer] = useState({})
  const [keywords, setKeywords] = useState([])
  const [recommen, setRecommen] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    serieDetails({ id })
      .then((serie) => {
        setSerie(serie)
        setLoading(false)
      })
      .catch((e) => setError(e))

    serieCredits({ id }).then((credits) => setCast(credits.cast))

    serieImages({ id }).then((img) => setImages(img.backdrops))

    getTrailerSerie({ id }).then((trailer) =>
      trailer.results.map((tri) =>
        tri.name === 'Official Trailer'
          ? setTrailer(tri)
          : tri.name === 'Teaser Trailer' && setTrailer(tri)
      )
    )
    keywordsSerie({ id }).then((words) => setKeywords(words.results))

    recommendationsSerie({ id }).then((recommendation) =>
      setRecommen(recommendation.results)
    )
  }, [id])

  return { loading, serie, cast, images, trailer, keywords, recommen, error }
}
