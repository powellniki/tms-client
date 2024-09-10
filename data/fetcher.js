const API_URL = 'http://192.168.1.204:8000'

const checkError = (res) => {
  if (!res.ok) {
    throw Error(`HTTP status ${res.status}`);
  }
  return res
}

const checkErrorJson = (res) => {
  if (!res.ok) {
    throw Error(`HTTP status ${res.status}`);
  } else {
    return res.json().then(data => ({
      ok: true,
      data: data
    }))
  }
}


export const fetchWithResponse = (resource, options) => fetch(`${API_URL}/${resource}`, options)
  .then(checkErrorJson)
  

export const fetchWithoutResponse = (resource, options) => fetch(`${API_URL}/${resource}`, options)
  .then(checkError)
  
