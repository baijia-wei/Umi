import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getToken() {
  const res = Cookies.get(TokenKey);
  return res;
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
