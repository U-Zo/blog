import client from './client';

const serverUrl = 'https://u-zo-server.herokuapp.com';

// 로그인
export const login = ({ username, password }) =>
  client.post(`${serverUrl}/api/auth/login`, { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post(`${serverUrl}/api/auth/register`, { username, password });

// 로그인 상태 확인
export const check = () => client.get(`${serverUrl}/api/auth/check`);

export const logout = () => client.post(`${serverUrl}/api/auth/logout`);
