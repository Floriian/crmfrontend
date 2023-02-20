import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { IconAlert } from '../Icons';
type Props = {
  type?: 'alert' | 'error' | 'success';
  children: React.ReactNode;
};

export function NotificationBox({ type, children }: Props) {
  const notificationClass = classNames({
    'bg-red-300 text-red-900': type === 'error',
    'bg-orange-300 text-orange-900': type === 'alert',
    'bg-green-300 text-green-900': type === 'success',
    'bg-cyan-300 text-cyan-900': !type,
  });

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{
      //   duration: 0.7,
      // }}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={'flex rounded-xl ' + notificationClass}
    >
      <div className="flex min-h-fit min-w-fit items-center border-r-2 border-red-900">
        <IconAlert className="text-4xl" />
      </div>
      <div className="ml-2">
        <h3 className="text-lg font-bold first-letter:uppercase">{type}</h3>
        {children}
      </div>
    </motion.div>
  );
}
