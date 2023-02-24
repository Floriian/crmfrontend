import { TUser } from '../types';
import { getAccessToken } from '../utils';
import { axiosInstance } from './axiosInstance';

const token = getAccessToken();

export const userService = {
  getUser: async function () {
    const { data } = await axiosInstance<TUser>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
