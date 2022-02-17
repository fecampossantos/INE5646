const users = axios => ({
  create: data => axios.post('/user/register', data)
})

export default users;