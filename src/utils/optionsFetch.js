export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      `Bearer ${import.meta.env.VITE_TOKEN_ACCESS_API}`,
  },
}
