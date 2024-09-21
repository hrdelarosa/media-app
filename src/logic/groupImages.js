export function groupImages({ images }) {
  const result = []

  for (let i = 0; i < images.length; i += 3) {
    result.push(images.slice(i, i + 3))
  }

  return result
}
