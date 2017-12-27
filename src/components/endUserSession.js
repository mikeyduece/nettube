export function endUserSession(user) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/v1/signout')
  })
}
