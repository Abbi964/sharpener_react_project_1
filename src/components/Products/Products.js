import React from "react";
import ProductItem from './ProductItem';

function Products(props){

    let products_content = props.items.map((product)=>(
        <ProductItem
            key={product.prodId}
            id={product.prodId}
            name={product.prodName}
            price={product.price}
        />
    ))

    return(
        <ul className='product-list'>
            {products_content}
        </ul>
    )
}

export default Products;