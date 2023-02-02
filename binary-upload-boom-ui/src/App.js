import './App.css';
import {SignupForm} from './components/forms/SignupForm';
import {LoginForm} from './components/forms/LoginForm';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import {HomePage} from './components/homepage/HomePage';
import {Post} from './components/shared/Post';
import {ProtectedRoute} from './components/shared/ProtectedRoute';
import {ButtonAppBar} from './components/shared/AppBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/post/:postId',
    element: (
      <ProtectedRoute>
        <Post />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
