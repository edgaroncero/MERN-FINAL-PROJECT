import { useEffect, useState, useContext } from 'react';
import confetti from 'canvas-confetti'

import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { UserEventsContext } from '../context/user-events-context '

import { LoginContext } from '../context/login-context';
import '../styles/Events.css';

function Events ({ events }) {
  const { userEvents, setUserEvents } = useContext(UserEventsContext)
  const { isLogin, setIsLogin } = useContext(LoginContext)

  const addToCart = (event, e) => {
    const token = localStorage.getItem('token');
    const decodeToken = jwt_decode(token);
    const userId = decodeToken.id;

    const eventExist = userEvents?.find(id => event._id === id);
    if (eventExist) {
      return;
    }

    fetch('https://eventasia-server.vercel.app/users', {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json' , 
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userId, eventId: event._id })
    })
    .then(res => res.json())
    .then(data => { 
      const newUserEvents = data.events;
      setUserEvents(newUserEvents);
      console.log(data)
      console.log(e);
      confetti({
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        }
      });
    })
    .catch(error => console.log(error));     
  }


  return (
    <div className="map-events-container">
      <div className="events-container">
        {events?.map(event => (
          <div key={event._id} className="event" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)), url(${event.img})`}}>
            <div className='event-title'>{event.title}</div>
            <div className='event-category'>{event.category}</div>
            <div className='event-location'>{event.location} - {event.city}</div>
            <div className='event-date'>{`${event.dtstart} - ${event.dtend}`}</div>
            <div className='event-price'>{ event.price == 0 ? 'GRATIS' :`${event.price}€`}</div>
            <div className="event-buttons">
            {isLogin ? (
                <button className="subscribe-button" onClick={(e) => addToCart(event, e)} >Suscríbete</button>
              ) : (
                <Link to="/registrate"><button className="subscribe-button">Suscríbete</button></Link>
              )}       
              <Link to={`/event/${event._id}`}><button className="info-button">Info</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Events;
