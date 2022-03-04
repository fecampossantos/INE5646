const users = axios => ({
  createUser: data => axios.post('/user/register', data)
})

export default users;