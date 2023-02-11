import React, { useState, useReducer } from 'react';
import {getRickAndMortyCharacters} from "../../services/services";
import {useQuery} from "@tanstack/react-query";

export const Feed = () => {

  const feedReducer = (state, action) => {
    switch(action.type) {
      case "showList" : {return {...state, showList: !state.showList}}
    }
  }

  const {showChar, setShowChar} = useState(false);
  const [state, dispatch ] = useReducer(feedReducer, {showList: false} )

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
    {/* <button onClick= { () => setShowChar}>"Hit me!"</button> */}
    
    <button onClick= { () => dispatch({type: "showList"})}>"Hit me!"</button>
    {state?.showList && data?.data?.results?.map(({id, name}) => (
        <li key={id}>{name}</li>
    ))}
  </>;
};
