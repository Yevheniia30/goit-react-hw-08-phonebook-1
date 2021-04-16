import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// регистрация POST /users/signup
export const register = ({ name, email, password }) => dispatch => {
  dispatch(registerRequest());

  axios
    .post('/users/signup', { name, email, password })
    .then(response => dispatch(registerSuccess(response.data)))
    .catch(error => dispatch(registerError(error.message)));
  // try {
  //   const response = await axios.post('/users/signup', credentials);

  //   dispatch(registerSuccess(response.data));
  // } catch (error) {
  //   dispatch(registerError(error));
  // }
};

//
export const token = () => dispatch => {};

// логин POST /users/login
export const login = ({ email, password }) => dispatch => {
  dispatch(loginRequest());
  axios
    .post('/users/login', { email, password })
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(error => dispatch(loginError(error.message)));
};

// разлогинить POST /users/logout
export const logout = () => dispatch => {};

// получение текущего пользователя (refresh) GET /users/current
export const getCurrentUser = () => (dispatch, getState) => {};
