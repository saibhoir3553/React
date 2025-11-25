import React, { useState } from 'react'
import { ProductsInfo } from '../ProductsInfo'
import { Link } from 'react-router-dom';

export const Products = () => {
    var [items,setItems]=useState(ProductsInfo);
  return (
    <div>
      {items.map((product)=>{
        // return <SingleProduct product={product}></SingleProduct>
        return (
            <div>
                <h3>{product.name}</h3>
                <Link to={`/products/${product.id}`}>Click here for more Info...........</Link>
            </div>
        )
      })}
    </div>
  )
}
   
export default Products 