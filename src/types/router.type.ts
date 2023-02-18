import { type RouteObject } from 'react-router-dom';

export type Route = RouteObject & {
  title?: string;
};
