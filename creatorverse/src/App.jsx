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

function App() {
  const [count, setCount] = useState(0)
  const [creators, setCreators] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShowCreators data={creators} />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator data={creators} />,
    },
    {
      path: "/show",
      element: <ShowCreators data={creators} />,
    },
    {
      path: "/view/:id",
      element: <ViewCreator data={creators} />,
    },
  ]);

  useEffect(() => {
    // Fetch data from Supabase
    const fetchData = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        console.log('Fetched creators:', data);
        setCreators(data);
      }
    };
    fetchData();
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
