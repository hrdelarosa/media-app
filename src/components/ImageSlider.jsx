import { groupImages } from '../logic/groupImages'
import { useSlider } from '../hooks/useSlider'
import '../styles/ImageSlider.css'

export default function ImageSlider({ images, name }) {
  const imageGroups = groupImages({ images })
  const { activeIndex, sliderRef } = useSlider()

  return (
    <section className="images-movies">
      <div className="title-markers">
        <h2>Images</h2>
        <div className="content-markers">
          <ul className="markers">
            {imageGroups.map((_, i) => (
              <li key={i}>
                <a
                  href={`#img_${i + 1}`}
                  style={{
                    '--i': i + 1,
                    '--range-start': `${i * (100 / imageGroups.length)}%`,
                    '--range-end': `${(i + 1) * (100 / imageGroups.length)}%`,
                  }}
                  className={activeIndex === i ? 'active' : ''}
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="slider" ref={sliderRef}>
        {imageGroups.map((group, i) => (
          <a key={i} name={`img_${i + 1}`} className="content-movies">
            {group.map((image, i) => (
              <div key={i} className="content-ima">
                <img
                  className="img-movie"
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt={`${name} image number ${i}`}
                />
              </div>
            ))}
          </a>
        ))}
      </div>
    </section>
  )
}
