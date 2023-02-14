import React, { useEffect } from 'react';
import { useAxios } from './hooks';
function App() {
  const { loading, error, response } = useAxios<{ name: string }>(
    'http://localhost:3000',
  );
  useEffect(() => console.log(response?.name), [response]);
  return <div className="text-red-500">{response?.name}</div>;
}

export default App;
