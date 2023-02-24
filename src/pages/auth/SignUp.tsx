import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TNestError, TSignUp } from '../../types';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Button } from '../../components/Form';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../services';
import { AxiosError } from 'axios';
import { NotificationBox } from '../../components/Notification';
function SignIn() {
  const [error, setError] = useState<TNestError>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignUp>({
    resolver: zodResolver(SignUpSchema),
  });

  const errorClass = classNames({
    'border-2 border-red-500 ': errors?.password || errors?.username,
  });

  const onFormSubmit: SubmitHandler<TSignUp> = async (data) => {
    try {
      const response = await axiosInstance.post<{ access_token: string }>(
        '/auth/sign-up',
        data,
      );
      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/');
      }
      if (!response.data.access_token) {
        setError({
          statusCode: 500,
          error: 'Something went wrong...',
          message: ['Something went wrong...'],
        });
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        const apiResponse: TNestError = e.response?.data;
        setError(apiResponse);
      }
    }
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
        <h2 className="text-center text-xl">Sign up</h2>
        {error ? (
          <NotificationBox type="error">{error.message}</NotificationBox>
        ) : null}
        <form className="m-2" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-2">
            <label htmlFor="username" className="text-text-lg block">
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
            <label htmlFor="username" className="text-text-lg block">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={errorClass + 'w-full'}
              {...register('email')}
            />
            {errors?.email && (
              <motion.p
                className="text-sm text-red-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors?.email?.message}{' '}
              </motion.p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-lg">
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
          <div className="mb-2">
            <label htmlFor="confirm" className="text-lgl block">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm"
              {...register('confirm')}
              className={errorClass + 'w-full'}
            />
            {errors?.confirm && (
              <motion.p
                className="text-sm text-red-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors?.confirm?.message}
              </motion.p>
            )}
          </div>
          <Button variant="confirm" className="mt-2 w-full">
            Sign up
          </Button>
        </form>
        <div className="m-2">
          <p className="text-lg">
            Already have an account?{' '}
            <Link
              to="/auth/sign-in"
              className="text-cyan-500 transition-colors duration-150 hover:text-cyan-600"
            >
              Sign in!
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default SignIn;
