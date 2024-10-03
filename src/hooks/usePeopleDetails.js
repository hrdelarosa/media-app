import { useEffect, useState } from 'react'
import { peopleDetails } from '../services/people/peopleDetails'
import { socialMediaPeople } from '../services/people/socialMediaPeople'
import { mediaCombined } from '../services/people/mediaCombined'

export function usePeopleDetails({ id }) {
  const [loading, setLoading] = useState(true)
  const [people, setPeople] = useState({})
  const [socialMedia, setSocialMedia] = useState({})
  const [medias, setMedias] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    peopleDetails({ id })
      .then((people) => {
        setPeople(people)
        setLoading(false)
      })
      .catch((e) => setError(e))

    socialMediaPeople({ id }).then((social) => setSocialMedia(social))

    mediaCombined({id}).then((media) => setMedias(media))
  }, [id])

  return { loading, people, socialMedia, medias, error }
}
