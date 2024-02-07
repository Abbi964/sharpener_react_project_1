import React, { useContext } from "react";
import ProductItem from './ProductItem';
import context from "../../context/context";

function Products(props){
    const ctx = useContext(context)

    let products_content = ctx.currentProducts.map((product)=>(
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