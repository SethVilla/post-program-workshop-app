import React from 'react';
import {useParams} from 'react-router-dom';

export const Post = () => {
  const {postId} = useParams();
  return <>Post {`${postId}`}</>;
};
