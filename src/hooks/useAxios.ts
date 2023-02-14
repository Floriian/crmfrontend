import { useEffect, useState } from 'react';
import axios, { type AxiosResponse, AxiosError } from 'axios';

export function useAxios<T>(url: string) {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const res = await axios<T>(url);
        setResponse(res.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        if (e instanceof AxiosError) {
          setError(e);
        }
        throw e;
      }
    };
    fetch();
  }, [url]);
  return {
    response,
    loading,
    error,
  };
}
