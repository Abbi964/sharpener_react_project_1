import React from "react";
import './ProductItem.css'
import Card from "../UI/Card";

function ProductItem(props){

    function deletionHandeler(e){

    }

    return(
        <Card className='product-details'>
            <h2>{props.name}</h2>
            <div className="product-item__price">Rs{props.price}</div>
            <button onClick={deletionHandeler}>DELETE</button>
        </Card>
    )
}

export default ProductItem;