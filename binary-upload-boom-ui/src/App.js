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
import {Feed} from './components/feed/Feed';
import {ProfilePage} from './components/profilepage/profile';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: Infinity,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ButtonAppBar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <ButtonAppBar />
        <SignupForm />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <ButtonAppBar />
        <LoginForm />
      </>
    ),
  },
  {
    path: '/post/:postId',
    element: (
      <>
        <ButtonAppBar />
        <Post />
      </>
    ),
  },
  {
    path: '/feed',
    element: (
      <>
        <ButtonAppBar />
        <Feed />
      </>
    ),
  },
  {
    path: '/profile',
    element: (
      <>
        <ButtonAppBar />
        <ProfilePage />
      </>
    ),
  },
]);

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
