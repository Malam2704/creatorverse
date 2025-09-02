import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatorCard from './components/CreatorCard';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreator from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatorCard />,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
