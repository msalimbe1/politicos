import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/api/auth";
const tokenKey = "politicos-token";

//adding x-auth-token, if any, to the headers.
//Required to access protected api endpoints.
http.setJwt(); //getJwt()

export async function login(mail, password) {
  // console.log('login', `${apiEndpoint}`, mail, password);

  const { data: jwt } = await http.post(`${apiEndpoint}`, {
    mail,
    password,
  });
  // console.log(`${apiEndpoint}`, jwt);
  localStorage.setItem(tokenKey, jwt.token);
}

export async function checkLogin(mail, password) {
  const data = await http.post(`${apiEndpoint}`, { mail, password });
  return data;
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
  checkLogin,
};
