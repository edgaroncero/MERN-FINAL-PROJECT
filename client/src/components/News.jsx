import React, { useEffect, useState } from 'react';
import '../styles/news.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


function News () {
  
  const [events, setEvents] = useState([])
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    fetch('https://eventasia-server.vercel.app/events')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])

  const filterEventsNews = (events) => {
    const startDate = filters.startDate
      ? new Date(filters.startDate.split('/').reverse().join('-'))
      : new Date();
    const endDate = filters.endDate
      ? new Date(filters.endDate.split('/').reverse().join('-'))
      : new Date('9999-12-31');
    return events.filter((event) => {
      const eventDate = new Date(event.dtstart);
      return eventDate >= startDate && eventDate <= endDate;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(filteredEvents)
  }

  const handleStartDate = (e) => {
    setFilters(prevState => ({ ...prevState, startDate: e.target.value }))
  }

  const handleEndDate = (e) => {
    setFilters(prevState => ({ ...prevState, endDate: e.target.value }))
  }

  const filteredEvents = filterEventsNews(events);

  return (
   
      <div className="news-container">
      <h2>Próximos Eventos</h2>
      {filteredEvents.slice(0, 11).map(event => (
          <div key={event._id} className="news">
            <div className='news-title'>{event.title} </div>
            <img className="news-img" src={event.img}/>
              <Link to={`/event/${event._id}`}><button className="news-info-button">Info</button></Link>
            <div className='news-location'>{event.city} {`${event.dtstart}`}</div>
          </div>
        ))}
      </div>
  );
};


export default News;
