import client from './client';
import server from './server';

// 로그인
export const login = ({ username, password }) =>
  client.post(`${server}/api/auth/login`, { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post(`${server}/api/auth/register`, { username, password });

// 로그인 상태 확인
export const check = () => client.get(`${server}/api/auth/check`);

export const logout = () => client.post(`${server}/api/auth/logout`);
