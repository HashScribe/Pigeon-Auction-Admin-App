import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './pages/index.ts';
import HelloWorld from './routes/hello.tsx';
import {Root} from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[{
      path: "hello",
      element: <HelloWorld/>,
    }]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
