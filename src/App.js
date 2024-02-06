import React, {Fragment, useState} from 'react';
import './App.css';
import NewProduct from './components/NewProduct/NewProduct';
import Products from './components/Products/Products';

function App() {
  // making state for total value of products
  const [totalValue, setTotalValue] = useState(0)

  const products = [
    {
      prodId : 1,
      prodName : 'I Phone 15',
      price : 89000
    },
    {
      prodId : 2,
      prodName : 'Playstation 5',
      price : 48000
    },
    {
      prodId : 3,
      prodName : 'HP Laptop',
      price : 36000
    },
  ]

  // using state for products
  const [currentProducts, setProducts] = useState(products)

  function addProductHandler(product){
    setTotalValue((prevValue)=>{
      return +prevValue + +product.price
    })
    setProducts((prevProd)=>{
      return [...prevProd,product]
    })

  }

  return (
    <Fragment>
      <NewProduct onAddProduct={addProductHandler}/>
      <h3>Total value worth of products : Rs{totalValue}</h3>
      <Products items={currentProducts}/>
    </Fragment>
  );
}

export default App;
