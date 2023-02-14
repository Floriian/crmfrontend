import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { browserRotuer } from './pages/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={browserRotuer} />
  </React.StrictMode>,
);
