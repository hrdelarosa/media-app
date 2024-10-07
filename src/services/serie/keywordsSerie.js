import { options } from "../../utils/optionsFetch"

export async function keywordsSerie( { id }) {
    const URL_TRENDING_MEDIA = `https://api.themoviedb.org/3/tv/${id}/keywords`

    try {
        const res = await fetch(URL_TRENDING_MEDIA, options)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
        const data = await res.json()

        return data
    } catch (error) {
        throw new Error(`Error fetching tasks: ${error.message}`)
    }
}