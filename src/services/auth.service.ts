import { AxiosError } from 'axios';
import { TSignUp, TSignIn, NestError, TNestError } from '../types';
import { axiosInstance } from './axiosInstance';

export async function signUp(dto: TSignUp) {
  const res = await axiosInstance.post<{ access_token: string }>(
    '/auth/sign-up',
    {
      dto,
    },
  );
  return res.data;
}

export async function signIn(dto: TSignIn) {
  try {
    const response = await axiosInstance.post<{ access_token: string }>(
      '/auth/sign-in',
      dto,
    );
    return response;
  } catch (e) {
    if (e instanceof AxiosError<TNestError>) {
      return e.response?.data;
    }
    console.log('is this throw...');
    throw e;
  }
}
