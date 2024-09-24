import '../styles/Recommendations.css'

export default function Recommendations({ recommen }) {
  return (
    <div className="recommen">
      <h2>Recommendations</h2>
      <div className="content-reco">
        {recommen.map((recomm, i) => (
          <div key={i} className="content-media-img">
            <img
              className="image-media"
              src={`https://image.tmdb.org/t/p/w342${recomm.poster_path}`}
              alt={`Movie poster for ${recomm.name || recomm.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
