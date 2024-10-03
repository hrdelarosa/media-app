import { options } from "../../utils/optionsFetch"

export async function movieImages({ id }) {
    const URL_IMAGES_MOVIE = `https://api.themoviedb.org/3/movie/${id}/images`

    try {
        const res = await fetch(URL_IMAGES_MOVIE, options)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
        const data = await res.json()

        return data
    } catch (error) {
        throw new Error(`Error fetching tasks: ${error.message}`)
    }
}