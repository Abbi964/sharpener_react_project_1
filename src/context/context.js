import React, {useState, useEffect} from "react";

const context = React.createContext({
    totalValue : 0,
    currentProducts : [],
    addProduct : ()=>{},
    totalValueRecucer : ()=>{}
})

export const ContextProvider = (props)=>{
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
        <context.Provider value={{
            totalValue : totalValue,
            currentProducts : currentProducts,
            addProduct  : addProductHandler,
            totalValueRecucer : totalValueRecucerHandler
        }}>
            {props.children}
        </context.Provider>
    )
}

export default context;