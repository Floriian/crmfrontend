import axios from 'axios';
import { TSignUp, TSignIn } from '../types';

export async function signUp(dto: TSignUp) {
  const res = await axios.post<{ access_token: string }>(
    'http://localhost:3000/auth/sign-up',
    { dto },
  );
  return res.data;
}

export async function signIn(dto: TSignIn) {
  const res = await axios.post<{ access_token: string }>(
    'http//localhost:3000/auth/sign-in',
    { dto },
  );
  return res.data;
}
