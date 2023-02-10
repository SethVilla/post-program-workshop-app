import React from 'react';
import {getRickAndMortyCharacters} from "../../services/services";
import {useQuery} from "@tanstack/react-query";

export const Feed = () => {
  const { status, data, error } = useQuery({
    queryKey: ['characters'],
    queryFn: getRickAndMortyCharacters,
  })

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return <>

    <h2>Feed</h2>
    {data?.data?.results?.map(({id, name}) => (
        <li key={id}>{name}</li>
    ))}
  </>;
};
