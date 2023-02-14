import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, TSignIn } from '../../types';
import { motion } from 'framer-motion';
import { Button } from '../../components/Form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignIn>({
    resolver: zodResolver(SignInSchema),
  });

  const errorClass = classNames({
    'border-2 border-red-500 ': errors?.password || errors?.username,
  });

  const onFormSubmit: SubmitHandler<TSignIn> = (d) => {
    console.log(d);
  };

  return (
    <div className="flex h-screen justify-center bg-slate-100 text-black dark:bg-slate-900 dark:text-white">
      <motion.div
        className="m-auto h-auto w-full rounded-md border-2 border-slate-900 bg-slate-300 p-2 dark:border-slate-300 dark:bg-slate-800 md:w-4/12"
        initial={{
          opacity: 0,
        }}
        animate={{
          y: '-20px',
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h2 className="text-center text-xl">Sign in</h2>
        <form className="m-2" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-2">
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={errorClass + 'w-full'}
              {...register('username')}
            />
            {errors?.username && (
              <motion.p
                className="text-sm text-red-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors?.username?.message}{' '}
              </motion.p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={errorClass + 'w-full'}
              {...register('password')}
            />
            {errors?.password && (
              <motion.p
                className="text-sm text-red-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors?.password?.message}
              </motion.p>
            )}
          </div>
          <Button variant="confirm" className="mt-2 w-full">
            Sign in
          </Button>
        </form>
        <div className="m-2">
          <p className="text-lg">
            Don't have an account?{' '}
            <Link
              to="/auth/sign-up"
              className="text-cyan-500 transition-colors duration-150 hover:text-cyan-600"
            >
              Sign up!
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default SignIn;
