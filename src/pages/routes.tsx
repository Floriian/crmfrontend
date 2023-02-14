import { type RouteObject, createBrowserRouter } from 'react-router-dom';

//TODO add "title" property to children element.

export type Route = RouteObject & {
  title?: string;
};
export const guestRoutes: Route[] = [
  {
    path: '/auth/sign-in',
    title: 'Sign in',
  },
  {
    path: '/auth/sign-up',
    title: 'Sign Up',
  },
];

export const routes = [...guestRoutes];

export const browserRotuer = createBrowserRouter(routes);
