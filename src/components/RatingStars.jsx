import Star from '../icons/Star'
import StarHalf from '../icons/StarHalf'
import { ratingStars } from '../logic/ratingStars'

export default function RatingStars({ rating }) {
  const { stars } = ratingStars({ rating })

  return (
    <ul className="rating">
      {stars.map((star, i) =>
        star === 0 ? <Star key={i} /> : <StarHalf key={i} />
      )}
    </ul>
  )
}
