import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import '../styles/Events.css';

import { Link } from 'react-router-dom';

function Events ({ events }) {
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (event) => {
     const eventExist = cart.find((item) => item._id === event._id)

     if (!eventExist) {
      setCart((prevState) =>  ([ ...prevState, event ]))
    }
  }

  return (
    <div className="map-events-container">
      <div className="events-container">
        {events.map(event => (
          <div key={event._id} className="event" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)), url(${event.img})`}}>
            <div className='event-title'>{event.title}</div>
            <div className='event-category'>{event.category}</div>
            <div className='event-location'>{event.location} - {event.city}</div>
            <div className='event-date'>{`${event.dtstart} - ${event.dtend}`}</div>
            <div className='event-price'>{ event.price == 0 ? 'GRATIS' :`${event.price}€`}</div>
            <div className="event-buttons">
              <button className="subscribe-button" onClick={() => addToCart(event)} >Suscríbete</button>
               <Link to={`/event/${event._id}`}><button className="info-button">Info</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

