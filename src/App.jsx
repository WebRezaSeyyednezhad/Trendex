// App.jsx
// import { Container, Button } from '@mui/material';
// import Header from './components/headerComponents/AppBar';
// import Playground from './Playground'
import FullPage from './components/FullPage';
import { createBrowserRouter, RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {path:"/", element:<FullPage />}
])

function App() {
  return <RouterProvider router={router} />
}

export default App;