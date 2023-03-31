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
    const startDate = filters.startDate.split('/').reverse().join('-')
    const endDate = filters.endDate.split('/').reverse().join('-')
    return events.filter(event => {
      return (
        (
          !filters.startDate || 
          event.dtstart >= startDate
         ) &&
         ( 
           !filters.endDate || 
           event.dtend <= endDate
         )
      )
    })
  }

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
    <div className="map-news-container">
     <h2>Próximos Eventos</h2>
      <div className="news-container">
        {events.map(event => (
          <div key={event._id} className="news">
            <img className="news-img" src={event.img} alt={event.title} />
            <div className='news-title'>{event.title}</div>
            <div className='news-location'>{event.city}</div>
            <div className='news-date'>{`${event.dtstart}`}</div>
            <div className="news-buttons">
              <Link to={`/event/${event._id}`}><button className="news-info-button">Info</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default News;
