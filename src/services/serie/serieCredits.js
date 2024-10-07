import { options } from "../../utils/optionsFetch"

export async function serieCredits({ id, number_season }) {
    const URL_CREDITS_MOVIE = `https://api.themoviedb.org/3/tv/${id}/season/${number_season}?language=en-US`

    try {
        const res = await fetch(URL_CREDITS_MOVIE, options)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
        const data = await res.json()

        return data
    } catch (error) {
        throw new Error(`Error fetching tasks: ${error.message}`)
    }
}