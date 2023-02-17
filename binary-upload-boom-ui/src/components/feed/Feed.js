import React from 'react';
import {getRickAndMortyCharacters} from "../../services/services";
import {useQuery} from "@tanstack/react-query";

// this feed page has a lot of potential to be a reusable component in our application,
// how can we modify it to be of general use in our app?
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
