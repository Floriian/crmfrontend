import React, { useState } from 'react';
import { Link, Outlet, To } from 'react-router-dom';
import { sideBarPages } from '../../pages/user/userRoutes';

type SidebarProps = {
  children: React.ReactNode;
};
export default function Sidebar({ children }: SidebarProps) {
  const [showed, setShowed] = useState<boolean>(true);
  return (
    <>
      <div className="flex">
        <div className="sticky top-0 h-screen w-56 bg-gray-200 text-black dark:bg-slate-900 dark:text-white">
          <div className="w-full border-b-2 p-2">
            <p className="text-center uppercase"> crm</p>
          </div>
          <ul>
            {sideBarPages.map((r) => (
              <SideBarLink path={r.path as To} title={r.title} key={r.path} />
            ))}
          </ul>
        </div>
        <div className="min-h-full w-full dark:bg-slate-700">{children}</div>
      </div>
    </>
  );
}

type Props = {
  path: To;
  title: string | undefined;
};
export function SideBarLink({ path, title }: Props) {
  return (
    <li className="w-full cursor-pointer list-none p-2 text-center text-black transition-colors duration-150 hover:bg-slate-300 hover:text-gray-900 dark:text-white dark:hover:bg-slate-600 hover:dark:text-gray-300">
      <Link to={path}>{title}</Link>
    </li>
  );
}
