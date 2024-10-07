export function nameSerieId({ id }) {
    return id.substring(id.indexOf('-') + 1)
}