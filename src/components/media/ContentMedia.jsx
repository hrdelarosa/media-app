import Media from './Media'
import NoPosterMedia from './NoPosterMedia'

export default function ContentMedia({ media }) {
  return (
    <div className="content-medias-display">
      {media &&
        media.map((movie, i) =>
          movie.poster_path ? (
            <Media key={i} media={movie} />
          ) : (
            <NoPosterMedia key={i} media={movie} />
          )
        )}
    </div>
  )
}
