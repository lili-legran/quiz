import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  };
}

export function logout() {
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: AUTH_LOGOUT
  };
}
