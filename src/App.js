import React, {Fragment, useContext} from 'react';
import './App.css';
import NewProduct from './components/NewProduct/NewProduct';
import Products from './components/Products/Products';
import context from './context/context';

function App() {
  const ctx = useContext(context)

  return (
    <Fragment>
      <NewProduct onAddProduct={ctx.addProductHandler}/>
      <h3>Total value worth of products : Rs{ctx.totalValue}</h3>
      <Products onReduceTotalValue={ctx.totalValueRecucerHandler} items={ctx.currentProducts}/>
    </Fragment>
  );
}

export default App;
