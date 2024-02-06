import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import NewProduct from './components/NewProduct/NewProduct';
import Products from './components/Products/Products';

function App() {
  // making state for total value of products
  const [totalValue, setTotalValue] = useState(0)

  // using state for products
  const [currentProducts, setProducts] = useState([])

  // loading all products from localstorage
  useEffect(()=>{
    // getting products from local storage
    let products = localStorage.getItem('prodArray')? JSON.parse(localStorage.getItem('prodArray')) :[];
    setProducts(products)

    // setting up the total value
    let totalPrice = 0
    if (products.length>0){
      products.forEach((prod)=>totalPrice = +totalPrice + +prod.price)
    }
    setTotalValue(+totalPrice)
  },[])


  function addProductHandler(product){
    setTotalValue((prevValue)=>{
      return +prevValue + +product.price
    })
    setProducts((prevProd)=>{
      return [...prevProd,product]
    })

  }

  function totalValueRecucerHandler(price){
    setTotalValue((prevValue)=>{
      return prevValue = +prevValue - +price
    })
  }

  return (
    <Fragment>
      <NewProduct onAddProduct={addProductHandler}/>
      <h3>Total value worth of products : Rs{totalValue}</h3>
      <Products onReduceTotalValue={totalValueRecucerHandler} items={currentProducts}/>
    </Fragment>
  );
}

export default App;
