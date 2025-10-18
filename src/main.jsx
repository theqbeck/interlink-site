import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Process from './pages/Process.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />,
    children: [
      { index: true, element: <Home/> },
      { path: 'services', element: <Services/> },
      { path: 'how-it-works', element: <Process/> },
      { path: 'testimonials', element: <Testimonials/> },
      { path: 'blog', element: <Blog/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
