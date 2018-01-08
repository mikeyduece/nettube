
export function PostUser(res, tokenId) {
  let userData = {
      'full_name': res.w3.ig,
      'first_name': res.w3.ofa,
      'last_name': res.w3.wea,
      'email': res.w3.U3,
      'token': res.accessToken,
      'image': res.w3.Paa
    }
  return new Promise((resolve, reject) => {
     fetch('http://localhost:3000/api/v1/auth/google_oauth2/callback',{
      method: "POST",
      headers: {
        "HTTP_AUTHORIZATION": `${tokenId}`,
        'Authorization': tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
