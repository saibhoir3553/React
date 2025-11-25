import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsInfo } from '../ProductsInfo'


 const SingleProduct = () => {
    var {productId}=useParams();
    var item=ProductsInfo.find((p)=>{
        return p.id === parseInt(productId);
    })
  return (
    <div>
      <h3>Id:{item.id}</h3>
      <h3>Name:{item.name}</h3>
      <img src={item.image} alt="not found" width="200px" height="150px"/>
      <h3>Price:{item.price}</h3>
    </div>
  )
}

export default SingleProduct
