const auth = axios => ({
  signin: data => axios.post('/api-token-auth', data)
})

export default auth;