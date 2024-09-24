import { groupImages } from '../logic/groupImages'
import '../styles/ImageSlider.css'

export default function ImageSlider({ images, name }) {
  const imageGroups = groupImages({ images })

  return (
    <section className="images-movies">
      <h2>Images</h2>
      <div className="slider">
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
