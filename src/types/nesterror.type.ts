import { AxiosError } from 'axios';

export type TNestError = {
  statusCode: number | null;
  message?: Array<string> | string | null;
  error: string | null;
};

export interface NestError extends AxiosError<TNestError> {}
