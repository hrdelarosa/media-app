import Media from './Media'
import NoPosterMedia from './NoPosterMedia'

export default function ContentMedia({ recommen }) {
  return (
    <div className="content-reco">
      {recommen.map((recomm, i) =>
        recomm.poster_path ? (
          <Media key={i} recomm={recomm} />
        ) : (
          <NoPosterMedia key={i} recomm={recomm} />
        )
      )}
    </div>
  )
}
