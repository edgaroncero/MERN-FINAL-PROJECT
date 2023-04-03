import { useContext, useEffect } from 'react'
import { UserEventsContext } from '../context/user-events-context '
import jwt_decode from 'jwt-decode';

import '../styles/Cart.css'

function Cart () {
const {userEvents, setUserEvents} = useContext(UserEventsContext)

  useEffect(() => {
         const token = localStorage.getItem('token')
         const decodedToken = jwt_decode(token);
         const userId = decodedToken.id;

            fetch(`https://eventasia-server.vercel.app/users/${userId}`, {
             method: 'GET',
             headers: { 
               'Content-Type': 'application/json' , 
               'Authorization': `Bearer ${token}`
             }
          }).then(res => res.json())
            .then(data => {
              const newUserEvents = data
              setUserEvents(newUserEvents)
              console.log(newUserEvents);
            })
            .catch((err) => console.log(err))
  }, [])

  const removeEvent = (item) => {
    const token = localStorage.getItem('token')
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;
    const eventId = item._id
  
    fetch(`https://eventasia-server.vercel.app/users/${userId}/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // Aquí llamamos de nuevo a la api para tener los datos actualizados
      fetch(`https://eventasia-server.vercel.app/users/${userId}`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json' , 
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        const newUserEvents = data
        setUserEvents(newUserEvents)
        console.log(newUserEvents);
      })
      .catch((err) => console.log(err))
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="cart-container">
      {userEvents?.map((item, index) => (
        <div key={index} className="cart-item">
        
          <div
             className="cart-item-image">
              <img src={item.img} alt={item.title} />
          </div>
          <div className="cart-item-details">
            <p className="cart-item-title">{item.title}</p>
            <p className="cart-item-category">{item.category}</p>
            <p className="cart-item-location">{`${item.location} - ${item.city}`}</p>
            <p className="cart-item-dates">{`${item.dtstart} - ${item.dtend}`}</p>
            <p className="cart-item-price">
              {item.price === 0 ? 'GRATIS' : `${item.price}€`}
            </p>
            <button
              className="cart-item-button"
              onClick={() => removeEvent(item)}
            >
              Remove Subscription
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart