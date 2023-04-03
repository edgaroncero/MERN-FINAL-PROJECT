import React, { useEffect, useState } from 'react';
import '../styles/news.css';
import { Link } from 'react-router-dom';
import { getEventsApi } from '../services/events';
import { useFilterNews } from '../hooks/News/filtered-news';
import jwt_decode from 'jwt-decode';


function News () {
 
  const [events, setEvents] = useState([])
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: ''
  })
 const { filteredNews } = useFilterNews({ events, filters })

  useEffect(() => {
    getEventsApi().then(data => setEvents(data))
  },[])

  return (
   
      <div className="news-container">
      <h2>Próximos Eventos</h2>
      {filteredNews.slice(0, 11).map(event => (
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
