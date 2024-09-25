import Layout from '../layouts/Layout'
import { useParams } from 'react-router-dom'
import { usePeopleDetails } from '../hooks/usePeopleDetails'

export default function PeopleDetails() {
  const { id } = useParams()
  const { people } = usePeopleDetails({ id })

  console.log(people)
  return (
    <Layout>
      <main>
        <h1>People</h1>
      </main>
    </Layout>
  )
}
