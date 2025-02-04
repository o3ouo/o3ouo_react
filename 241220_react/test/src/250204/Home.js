import React from 'react';
import { useProductQuery } from './hooks/useProd';

function Home() {

  const {data, isLoading, isError, error, refetch} = useProductQuery();

  console.log("home:", data);

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Home;
