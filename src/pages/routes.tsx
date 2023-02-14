import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

//TODO add "title" property to children element.

export type Route = RouteObject & {
  title?: string;
};
export const guestRoutes: Route[] = [
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

export const routes = [...guestRoutes];

export const browserRotuer = createBrowserRouter(routes);
