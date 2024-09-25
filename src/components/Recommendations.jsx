import ContentMedia from './media/ContentMedia'
import '../styles/Recommendations.css'

export default function Recommendations({ recommen }) {
  return (
    <div className="recommen">
      <h2>Recommendations</h2>

      <ContentMedia recommen={recommen} />
    </div>
  )
}
