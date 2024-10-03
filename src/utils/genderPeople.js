const genders = {
    0: 'Not set / not specified',
    1: 'Female',
    2: 'Male',
    3: 'Non-binary',
}

export function genderPeople(gender) {
    return genders[gender]
}