import { useEffect, useState } from 'react'
import { peopleDetails } from '../services/peopleDetails'

export function usePeopleDetails({ id }) {
  const [people, setPeople] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    peopleDetails({ id })
      .then((people) => setPeople(people))
      .catch((e) => setError(e))
  }, [id])

  return { people, error }
}
