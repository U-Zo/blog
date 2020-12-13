import qs from 'qs';
import client from './client';
import server from './server';

export const writePost = ({ title, body, tags }) =>
  client.post(`${server}/api/posts`, { title, body, tags });

export const readPost = (id) => client.get(`${server}/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });

  return client.get(`${server}/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) => {
  client.patch(`${server}/api/posts/${id}`, {
    title,
    body,
    tags,
  });
};

export const removePost = (id) => client.delete(`${server}/api/posts/${id}`);
