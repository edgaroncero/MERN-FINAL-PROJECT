import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'

function Cart () {
 const { cart } = useContext(CartContext)
 console.log(cart);
  return (
    <div>
       {cart.map((item) => (
        <div key={item._id} style={{color: 'white', backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,1)), url(${item.img})`}}>
            <div >{item.title}</div>
            <div >{item.category}</div>
            <div >{item.location} - {item.city}</div>
            <div >{`${item.dtstart} - ${item.dtend}`}</div>
            <div >{ item.price == 0 ? 'GRATIS' :`${item.price}€`}</div>
          </div>
          ))}
     </div>  
  )
}

export default Cart