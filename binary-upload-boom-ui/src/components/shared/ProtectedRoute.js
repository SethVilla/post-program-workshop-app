import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

export const ProtectedRoute = ({children}) => {
  const {token} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // if no token user is not logged in navigate to log in
    if (!token) {
      navigate('/login');
    }
  });
  return children;
};
