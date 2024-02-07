import React, {Fragment, useContext} from 'react';
import './App.css';
import NewProduct from './components/NewProduct/NewProduct';
import Products from './components/Products/Products';
import context from './context/context';

function App() {
  const ctx = useContext(context)

  return (
    <Fragment>
      <NewProduct/>
      <h3>Total value worth of products : Rs{ctx.totalValue}</h3>
      <Products/>
    </Fragment>
  );
}

export default App;
