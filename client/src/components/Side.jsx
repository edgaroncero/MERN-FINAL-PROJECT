import React, { useEffect, useState } from 'react';
import News from '../components/News'
import '../styles/news.css';
import '../styles/Side.css';
import { Link } from 'react-router-dom';



function Side ({city , id}) {
  
  const [events, setEvents] = useState([])
  console.log(id) ;
  useEffect(() => {
    fetch(`https://eventasia-server.vercel.app/events/city/${city}`)
    .then(res => res.json())
    .then(data => {
        setEvents(data);
        console.log(city);
        console.log(data);

    })
  },[city])



  return (
    <div className="side-container">
      {events.length >= 2 ? (
        <>
          <h2>Otros eventos que podrían interesarte</h2>
          {events.map(event => {
            if (event._id === id) {
              return null;
            }  
            return (
              <div key={event._id} className="event-side">
                <div className='event-side-title'>{event.title} </div>
                <img className="event-side-img" src={event.img}/>
                <Link to={`/event/${event._id}`}><button className="news-info-button">Info</button></Link>
                <div className='event-side-date'> {`${event.dtstart}`}</div>
              </div>
            );
          })}
        </>
      ) : (
        <News />
      )}
    </div>
  );
};

export default Side;