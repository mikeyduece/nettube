export function searchYoutube(video) {
  return fetch(`http://localhost:3000/api/v1/search?q=${video}`)
}
