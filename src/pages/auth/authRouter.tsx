import { type Route } from '../../types';
import SignIn from './SignIn';
import SignUp from './SignUp';
export const authRouter: Route[] = [
  {
    path: '/auth/sign-in',
    element: <SignIn />,
    title: 'Sign in',
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />,
    title: 'Sign Up',
  },
];
