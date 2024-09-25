const API_URL = 'https://tms-project-7nt7y.ondigitalocean.app'

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
  
