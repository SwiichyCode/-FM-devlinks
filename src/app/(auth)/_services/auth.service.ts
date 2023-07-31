import axios from "axios";
import API_URL from "@/constants/api.constant";

const fromLocalHost = true;

const api_url = fromLocalHost
  ? "http://localhost:8080/api/auth/"
  : API_URL.api_auth;

const register = async (email: string, password: string) => {
  return axios.post(api_url + "register", {
    email,
    password,
  });
};

const login = async (email: string, password: string) => {
  return axios
    .post(api_url + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
