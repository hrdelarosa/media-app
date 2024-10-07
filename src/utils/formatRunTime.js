export function runtime(time) {
  if (time < 60) return `${time} min`

  const hrs = Math.floor(time / 60)
  const min = time % 60

  return `${hrs} hour${hrs !== 1 ? 's' : ''} ${min} min`
}
