import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import News from '../components/News';
import '../styles/news.css';


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
    <div className="map-news-container">
      {events.length >= 2 ? (
        <>
        <div className="news-container">
          <div className="news-container-title"><h2>Otros eventos que podrían interesarte en {city}</h2></div>
          {events.map(event => {
            if (event._id === id) {
              return null;
            }  
            return (
              <div key={event._id} className="news">
                <div className='news-title'>{event.title} </div>
                    <div className="news">
                      <img className="news-img" src={event.img}/>
                      <Link to={`/event/${event._id}`}><button className="news-info-button">Info</button></Link>
                  <div className='news-location'> {`${event.dtstart}`}</div>
                </div>
              </div>
            );
          })}
        </div>
        </>
      ) : (
        <News />
      )}
    </div>
  );
};

export default Side;