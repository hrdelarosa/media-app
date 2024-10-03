import { useEffect, useState } from 'react'
import { peopleDetails } from '../services/people/peopleDetails'
import { socialMediaPeople } from '../services/people/socialMediaPeople'
import { mediaCombined } from '../services/people/mediaCombined'

export function usePeopleDetails({ id }) {
  const [people, setPeople] = useState({})
  const [socialMedia, setSocialMedia] = useState({})
  const [medias, setMedias] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    peopleDetails({ id })
      .then((people) => setPeople(people))
      .catch((e) => setError(e))

    socialMediaPeople({ id }).then((social) => setSocialMedia(social))

    mediaCombined({id}).then((media) => setMedias(media))
  }, [id])

  return { people, socialMedia, medias, error }
}
