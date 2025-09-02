import { useState, useEffect } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreator from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import supabase from './client.js'
import ShowCreators from './pages/ShowCreators';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators />,
  },
  {
    path: "/add",
    element: <AddCreator />,
  },
  {
    path: "/edit",
    element: <EditCreator />,
  },
  {
    path: "/show",
    element: <ShowCreator />,
  },
  {
    path: "/view",
    element: <ViewCreator />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Fetch data from Supabase
    const fetchData = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        console.log('Fetched creators:', data);
      }
    };
    fetchData();
  }, []);

  return (
    <RouterProvider router={router} />)
}

export default App;
