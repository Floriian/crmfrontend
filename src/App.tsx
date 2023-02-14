import React, { useEffect } from 'react';
import { useAxios } from './hooks';
import { routes } from './pages/routes';
function App() {
  const { loading, error, response } = useAxios<{ name: string }>(
    'http://localhost:3000',
  );
  useEffect(() => console.log(response?.name), [response]);
  return (
    <div className="text-red-500">
      asdgeci
      {routes.map((r, i) => (
        <h1 key={i}>{r.title}</h1>
      ))}
    </div>
  );
}

export default App;
