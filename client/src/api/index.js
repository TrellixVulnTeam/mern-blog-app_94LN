import axios from 'axios';

export const BASIC_POSTS_URL = 'http://localhost:3001/posts'

export const getAllPosts = () => axios.get(BASIC_POSTS_URL);
export const createPost = (post) => axios.post(BASIC_POSTS_URL, post);
