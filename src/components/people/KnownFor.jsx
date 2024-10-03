import KnownMedia from './KnownMedia'

export default function KnownFor({ medias, person_id, person }) {
  console.log(medias)
  return (
    <div className="known-content">
      <h2>Known for</h2>

      <KnownMedia medias={medias} person_id={person_id} person={person} />
    </div>
  )
}
