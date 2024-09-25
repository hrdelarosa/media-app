import NoImage from '../icons/NoImage'

export default function NoPosterMedia({ recomm }) {
  return (
    <div className="content-no-poster">
      <div className="no-poster">
        <span>No Poster</span>
        <NoImage />
      </div>

      <h3>{recomm.name || recomm.title}</h3>
    </div>
  )
}
