import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import EmployeeList from './pages/employeeList/EmployeeList.tsx';
import { Provider } from 'react-redux';
import { store } from './utils/store.ts';

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <div>Error</div>,
      },
      {
        path: '/employee-list',
        element: <EmployeeList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
