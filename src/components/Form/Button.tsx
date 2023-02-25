import React from 'react';
import classNames from 'classnames';
type Props = {
  variant: 'danger' | 'warning' | 'confirm' | 'base';
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  variant,
  children,
  disabled,
  className,
  onClick,
}: Props) {
  const buttonClass = classNames({
    'bg-red-500 hover:bg-red-700': variant === 'danger',
    'bg-orange-500 hover:bg-orange-800': variant === 'warning',
    'bg-green-500 hover:bg-green-500 text-white': variant === 'confirm',
    'bg-cyan-500 hover:bg-cyan-500': variant === 'base',
    'bg-gray-500': disabled,
  });
  return (
    <button
      onClick={onClick}
      className={buttonClass + ' rounded-md p-2 ' + className}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
}
