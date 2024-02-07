import React, { useContext } from "react";
import './ProductItem.css'
import Card from "../UI/Card";
import context from "../../context/context";

function ProductItem(props){
    const ctx = useContext(context)

    function deletionHandeler(e){
        let id = e.target.parentElement.id
        let price = e.target.parentElement.getAttribute('data-price')
        // removing product from list
        e.target.parentElement.remove()

        //------------- removing product from localStorage---------//
        let currentProdArray = JSON.parse(localStorage.getItem('prodArray'))
        // removing product
        let newProdArray = currentProdArray.filter((prod)=>{
            return +prod.prodId !== +id
        })
        localStorage.setItem('prodArray',JSON.stringify([...newProdArray]))

        //--------------- reducing total price --------------- //
        ctx.totalValueRecucer(+price)
    }

    return(
        <Card price={props.price} id={props.id} className='product-details'>
            <h2>{props.name}</h2>
            <div className="product-item__price">Rs{props.price}</div>
            <button onClick={deletionHandeler} className="delBtn">DELETE</button>
        </Card>
    )
}

export default ProductItem;