import axios from "axios";


const configAxios = token => {

  const baseUrl = 'http://localhost:8000';

  const configParams = {
    baseUrl,
    headers: {}
  }

  if(token) configParams.headers.authorization = `Token ${token}`

  return axios.create(configParams)
}

export default configAxios