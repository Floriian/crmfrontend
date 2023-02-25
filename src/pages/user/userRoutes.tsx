import { type Route } from '../../types';
import Layout from '../../components/Layout/Layout';
import Home from './Home';
import { taskPages } from './tasks/taskRoutes';

export const menuPages: Route[] = [
  {
    title: 'Sign out',
    path: '/auth/sign-out',
    element: <h1>sign out</h1>,
  },
  {
    title: 'Profile',
    path: '/profile',
    element: <h1>profile</h1>,
  },
];

export const sideBarPages: Route[] = [
  {
    title: 'Homepage',
    path: '/',
    element: <Home />,
  },
  ...taskPages,
];

export const userRouter: Route[] = [
  {
    element: <Layout />,
    children: [...menuPages, ...sideBarPages],
  },
];
