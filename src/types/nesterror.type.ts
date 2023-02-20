import { AxiosError } from 'axios';

export type TNestError = {
  statusCode: number;
  message?: Array<string>;
  error: string;
};

export interface NestError extends AxiosError<TNestError> {}
