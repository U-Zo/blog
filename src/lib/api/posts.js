import qs from 'qs';
import client from './client';

const serverUrl = 'https://u-zo-server.herokuapp.com';

export const writePost = ({ title, body, tags }) =>
  client.post(`${serverUrl}/api/posts`, { title, body, tags });

export const readPost = (id) => client.get(`${serverUrl}/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });

  return client.get(`${serverUrl}/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) => {
  client.patch(`${serverUrl}/api/posts/${id}`, {
    title,
    body,
    tags,
  });
};

export const removePost = (id) => client.delete(`${serverUrl}/api/posts/${id}`);
