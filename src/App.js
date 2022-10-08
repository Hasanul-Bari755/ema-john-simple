import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productsAndCartLoader } from './loadersData/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: productsAndCartLoader
        },
        {
          path: '/order',
          loader:productsAndCartLoader,
          element:<Order></Order>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/inventory',
          element:<Inventory></Inventory>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
