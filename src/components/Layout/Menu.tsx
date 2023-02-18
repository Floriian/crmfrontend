import React from 'react';
import { Link, To } from 'react-router-dom';
import { menuPages } from '../../pages/user/userRoutes';

export function Menu() {
  return (
    <nav className="flex justify-end bg-gray-100 text-black dark:bg-slate-900 dark:text-white">
      {menuPages.map((r) => (
        <MenuLink key={r.path} path={r.path as To} title={r.title} />
      ))}
    </nav>
  );
}

type Props = {
  title?: string;
  path: To;
};

function MenuLink({ path, title }: Props) {
  return (
    <Link
      to={path}
      className="m-2 rounded p-2 uppercase hover:bg-slate-300 hover:dark:bg-slate-600"
    >
      {title}
    </Link>
  );
}
