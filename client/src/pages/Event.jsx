import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';



function Event (props) {

    let [eventCard, setEventCard] = useState({});
    let [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://eventasia-server.vercel.app/events/${id}`)
        .then(res => res.json())
        .then(data => {
            setEventCard(data);
            console.log(data);
        })
        .finally(() => setIsLoading(false));
    }, [id]);

    const loading = isLoading ? 'Loading .......' : null;

    return (
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          {loading}
          {eventCard && (
            <div key={eventCard._id}>
              <img style={{ width: '500px', height: 'auto' }} src={eventCard.img} alt={eventCard.title} />
              <h3>{eventCard.title}</h3>
              <h5>{eventCard.info}</h5>
              <h5>{eventCard.price}</h5>
              <h5>{eventCard.link}</h5>
              <div style={{ height: '500px', width: '370px' }}>
  
              </div>

            </div>
          )}
          {!eventCard && (
            <p>No se encontró el evento con el ID proporcionado.</p>
          )}
        </div>
    );
};

export default Event;