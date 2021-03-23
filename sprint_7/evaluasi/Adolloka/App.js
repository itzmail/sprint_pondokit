import React from 'react';
import NavRoutes from './src/routes/index';
import AddProduct from './src/containers/members/AddProduct';
import Demo from './src/Demo';
import { AfterAdd } from './src/containers/members';

function App() {
  return (
    <NavRoutes />
    // <AfterAdd />
  );
}

export default App
