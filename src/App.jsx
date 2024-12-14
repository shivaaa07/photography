import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout';
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "albums",
          element : <Albums />
        },
        {
          path : "gallery",
          element : <Gallery />
        },
        {
          path : "blog",
          element : <Blog />
        },
        {
          path : "about",
          element : <About />
        },
        {
          path : "contact",
          element : <Contact />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
