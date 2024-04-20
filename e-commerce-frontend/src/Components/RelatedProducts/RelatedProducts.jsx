import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
    </div>
  )
}

export default RelatedProducts

// <h1>Related Products</h1>
// <hr />
// <div className="relatedproducts-item">
//   {data_product.map((item)=>{
//       return <Item id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
//   })}
// </div>