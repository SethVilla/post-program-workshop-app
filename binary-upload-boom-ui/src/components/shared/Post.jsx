import React from 'react';
import {useParams} from 'react-router-dom';

// Task
// make a server call to retrieve post with useEffect or useQuery
// use useState or UseQuery to provide a loading screen while data is fetching
// use useReducer to manage data from the server
// build out the UI for the post page, feel free to use material ui or your own css
export const Post = () => {
  const {postId} = useParams();
  return <>Post {`${postId}`}</>;
};
