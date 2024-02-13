import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
// import './index.css'
//commented out because it affects the signup.jsx css

import Dashboard from './pages/dashboard';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Search from './pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/profiles/:profileId',
        element: <Dashboard />
      },
      {
        path: '/search',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
