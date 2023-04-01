import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Map from '../components/Map';

import '../styles/event-style.css';


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};


function Event (props) {

    // DETALLE DEL EVENTO
    const { id } = useParams();
    let [eventCard, setEventCard] = useState({});
    let [isLoading, setIsLoading] = useState(false);
    
    // BOTONES INFO

      const [showDivPrice, setShowDivPrice] = useState(false);
      const [showDivLink, setShowDivLink] = useState(false);
      const [showDivDates, setShowDivDates] = useState(false);
    
      const toggleDivPrice = () => {
        setShowDivPrice(!showDivPrice);
      };
      
      const toggleDivLink = () => {
        setShowDivLink(!showDivLink);
      };
      
      const toggleDivDates = () => {
        setShowDivDates(!showDivDates);
      };

    const center = {};

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
      <div className="">
        {loading}
        {eventCard && (
          <div className="cardEvent">
            <img className="cardEvent__img" src={eventCard.img} alt={eventCard.title} />
            <div className="cardEvent__title">{eventCard.title}</div>
            <div className="cardEvent__info">{eventCard.info}</div>
    
            <div className="cardEvent__infogral">
              <div className="cardEvent__map">
                {eventCard.lat && eventCard.long && (
                  <Map center={{ lat: eventCard.lat, lng: eventCard.long }} />
                )}
              </div>
    
              <div className="cardEvent__infogral-item">

              <button className="button" onClick={toggleDivPrice}>PRECIOS</button>
                  {showDivPrice && (
                    <div className="showDiv__2">
                      <div className="cardEvent__price">
                        Precios desde {eventCard.price} €
                      </div>
                    </div>
                  )}

              <button className="button" onClick={toggleDivLink}>CONTACTO</button>
                  {showDivLink && (
                    <div className="showDiv">
                      <p className="cardEvent__link"> <a href={eventCard.link} target="_blank" rel="noopener noreferrer">Acceda aquí a la web</a></p>
                    </div>
                  )}

               <button className="button" onClick={toggleDivDates}>FECHAS</button>
                  {showDivDates && (
                    <div className="cardEvent__dates">
                      Desde {eventCard.dtstart} hasta {eventCard.dtend}
                    </div>
                  )}

              </div>
            </div>
    
            {!eventCard && <p>No se encontró el evento con el ID proporcionado.</p>}
          </div>
        )}
      </div>
    );
};

export default Event;
