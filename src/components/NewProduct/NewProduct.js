import React, { useContext, useRef } from "react";
import "./NewProduct.css";
import context from "../../context/context";

function NewProduct(props) {
    // making ref for inputs
    let nameInputRef = useRef()
    let idInputRef = useRef()
    let priceInputRef = useRef()

    // using context
    const ctx = useContext(context)

  function submitHandler(e) {
    e.preventDefault()
    //------------ First saving in localstorage- -----------------------//
    let prodObj = {
        prodId : idInputRef.current.value,
        prodName : nameInputRef.current.value,
        price : priceInputRef.current.value
    }

    // if localstorage has proArray then pushing into that else making new
    let currentProdArray = localStorage.getItem('prodArray') ? JSON.parse(localStorage.getItem('prodArray')) : [];

    let newProdArray = currentProdArray.concat(prodObj)
    // saving in local storage
    localStorage.setItem('prodArray',JSON.stringify([...newProdArray]))

    // clearing inputs
    nameInputRef.current.value = '';
    idInputRef.current.value = '';
    priceInputRef.current.value = '';
    // ------------------------------------------------------------------------------- //

    ctx.addProduct(prodObj)

  }

  return (
    <div className="new-product">
      <form className="form-class">
        <div className="new-product-controls">
          <div className="new-product-control">
            <label htmlFor="idInput">Product ID</label>
            <input ref={idInputRef} type="text" id="idInput" />
          </div>
          <div className="new-product-control">
            <label htmlFor="nameInput">Product Namet</label>
            <input ref={nameInputRef} type="text" id="nameInput" />
          </div>
          <div className="new-product-control">
            <label htmlFor="priceInput">Selling Price</label>
            <input ref={priceInputRef} type="number" id="priceInput" />
          </div>
        </div>
        <div className="new-product-actions">
          <button onClick={submitHandler} type="submit" className="submitBtn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
