import {
  type RouteObject,
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Layout from '../components/Layout/Layout';
import Home from './user/Home';
import { userRouter } from './user/userRoutes';
import { authRouter } from './auth/authRouter';

//TODO add "title" property to children element.
export const routes = [...userRouter, ...authRouter];

export const browserRotuer = createBrowserRouter(routes);
