import React from 'react';
import '../styles/Events.css';

const events = [
  { id: 1, title: 'Evento 1', date: '2023-04-01' },
  { id: 2, title: 'Evento 2', date: '2023-04-05' },
  { id: 3, title: 'Evento 3', date: '2023-04-15' },
  { id: 4, title: 'Evento 4', date: '2023-04-20' },
  { id: 5, title: 'Evento 5', date: '2023-04-25' },
  { id: 6, title: 'Evento 6', date: '2023-05-01' },
  { id: 7, title: 'Evento 7', date: '2023-05-05' },
  { id: 8, title: 'Evento 8', date: '2023-05-15' },
  { id: 9, title: 'Evento 9', date: '2023-05-20' },
  { id: 10, title: 'Evento 10', date: '2023-05-25' },
  { id: 11, title: 'Evento 11', date: '2023-06-01' },
  { id: 12, title: 'Evento 12', date: '2023-06-05' },
];

const Events = () => {
  return (
    <div className="map-events-container">
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
