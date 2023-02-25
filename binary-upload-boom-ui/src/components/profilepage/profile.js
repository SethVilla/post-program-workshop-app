import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {UploadPost} from '../forms/UploadPost';

export const ProfilePage = () => {
  const {uid} = useAuth();
  console.log(uid);
  // Access the context provider
  // Display user details
  // build out ui for the profile page
  //
  return (
    <>
      <UploadPost />
    </>
  );
};
