import { TTask } from '../types';
import { authInstance } from './authInstance';

export const taskService = {
  getTasks: async function () {
    const { data } = await authInstance<TTask[]>('/tasks');
    return data;
  },
};
