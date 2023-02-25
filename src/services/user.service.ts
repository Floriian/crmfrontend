import { TUser } from '../types';
import { getAccessToken } from '../utils';
import { authInstance } from './authInstance';
import { axiosInstance } from './axiosInstance';

const token = getAccessToken();

export const userService = {
  getUser: async function () {
    const { data } = await authInstance<TUser>('/user');
    return data;
  },
};
