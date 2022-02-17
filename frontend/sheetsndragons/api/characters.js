const characters = axios => ({
  create: data => axios.post('', data),
  get: charID => axios.get(`${charID}`)
})

export default characters;