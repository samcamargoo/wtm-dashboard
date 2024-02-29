import { api } from "../api/Axios";
import { Credential } from "../interfaces/Credential";

export const authenticateUser = async (credentials: Credential) => {
  const response = await api.post("/auth", credentials);
  return response.data;
};
