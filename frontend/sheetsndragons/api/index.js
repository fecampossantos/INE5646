import configAxios from "./axios";
import auth from "./auth";
import users from "./user";
import characters from "./characters";

export function configClient(token) {
  const axios = configAxios(token);

  return {
    auth: auth(axios),
    users: users(axios),
    characters: characters(axios),
  }
}

const api = () => configClient();
export default api;
