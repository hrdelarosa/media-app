import { useEffect, useState } from 'react'

export function useOpacity(loading) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
      setOpacity(1)
    }, 100)
    
    return () => clearTimeout(timer)
  }
  }, [loading])

  return { opacity }
}
