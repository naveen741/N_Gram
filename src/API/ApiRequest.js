const baseURL = 'https://my-application-backend.herokuapp.com/' 
export function fetchData (reqBody, reqRoute) {
  return fetch (baseURL + reqRoute, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  }).then(data => {return parseJSON(data) })
    .catch(error => { return error })
}
function parseJSON (response) {
  return response.json()
}