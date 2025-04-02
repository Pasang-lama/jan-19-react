import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/base/variable.scss"
import "../src/scss/base/common.scss"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound.jsx'
import Location from './pages/Location.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/*",
    element: <Pagenotfound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
