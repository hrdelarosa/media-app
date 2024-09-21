import { useEffect, useRef, useState } from 'react'

export function useSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  const handleScroll = () => {
    const slider = sliderRef.current
    const scrollLeft = slider.scrollLeft
    const width = slider.offsetWidth

    const newIndex = Math.round(scrollLeft / width)
    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return { activeIndex, sliderRef }
}
