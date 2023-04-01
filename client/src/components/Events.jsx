import React, { useEffect, useState } from 'react';
import '../styles/Events.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import { jwt } from 'jsonwebtoken';



function Events ({ events }) {
  

  const addToCart = (event) => {

      const token = localStorage.getItem('token')

      const decodeToken = jwt_decode(token)
      const userId = decodeToken.id
      

      fetch('https://eventasia-server.vercel.app/users', {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json' , 
          'Authorization': `Bearer ${token}`
      },
        body: JSON.stringify({ userId, eventId: event._id })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
       
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
