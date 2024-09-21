export function ratingStars({ rating }) {
  const rounded = Math.round(rating)
  const full = Math.floor(rounded / 2)
  const half = rounded % 2
  const stars = []

  for (let i = 0; i < full; i++) {
    stars.push(0)
  }

  if (half === 1) {
    stars.push(1)
  }

  return { stars }
}
