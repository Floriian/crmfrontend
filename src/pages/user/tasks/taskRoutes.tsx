import { Route } from '../../../types';
import Tasks from './Tasks';

export const taskPages: Route[] = [
  {
    title: 'Tasks',
    path: '/tasks',
    element: <Tasks />,
  },
];
