import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = (props) => {
  return (
    <div className='new-collections'>
    </div>
  )
}

export default NewCollections

// <h1>NEW COLLECTIONS</h1>
// <hr />
// <div className="collections">
//   {props.data.map((item,i)=>{
//           return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
//       })}
// </div>