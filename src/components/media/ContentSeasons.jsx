import Season from './Season'

export default function ContentSeasons({ serie }) {
  return (
    <div className="content-medias-display">
      {serie.seasons &&
        serie.seasons.map((season, i) => (
          <Season key={i} season={season} serie={serie} />
        ))}
    </div>
  )
}
