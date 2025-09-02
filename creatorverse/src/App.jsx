import { useState } from 'react'
import './App.css'
import CreatorCard from './components/CreatorCard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

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

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreatorCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
