export default function Media({ recomm }) {
  return (
    <div className="content-media">
      <img
        className="image-media"
        src={`https://image.tmdb.org/t/p/w342${recomm.poster_path}`}
        alt={`Movie poster for ${recomm.name || recomm.title}`}
      />
    </div>
  )
}
