import axios from 'axios';
import { getAccessToken } from '../utils';

const token = getAccessToken();
export const authInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
