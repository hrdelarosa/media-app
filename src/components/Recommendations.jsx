import ContentMedia from './media/ContentMedia'
import '../styles/Recommendations.css'

export default function Recommendations({ recommen }) {
  return (
    <div className="recommen">
      {recommen.length > 0 && <h2>Recommendations</h2>}

      <ContentMedia media={recommen} />
    </div>
  )
}
