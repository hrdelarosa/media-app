export function calculateAge(date) {
    const day = new Date()
    const birthday = new Date(date)

    let age = day.getFullYear() - birthday.getFullYear()

    const differenceMonth = day.getMonth() - birthday.getMonth()
    const differenceDay = day.getDate() - birthday.getDate()

    if (differenceMonth < 0 || (differenceMonth === 0 && differenceDay < 0)) age--

    return age
}