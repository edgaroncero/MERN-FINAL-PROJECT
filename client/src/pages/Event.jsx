import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//Componentes
import { Calendar, Price, Web } from '../config/icons-export';
import Side from '../components/Side';
import Map from '../components/Map';

//Stilos
import '../styles/event-style.css';
import "../styles/Loading.css"; 


function Event () {

    //SPINNNER 

    // DETALLE DEL EVENTO
    const { id } = useParams();
    let [eventCard, setEventCard] = useState({});
    let [isLoading, setIsLoading] = useState(false);
    
    // BOTONES INFO GRAL
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

    // MOSTRAR CONTENIDO INFO
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };

  useEffect(() => {
        setIsLoading(true);
        fetch(`https://eventasia-server.vercel.app/events/${id}`)
        .then(res => res.json())
        .then(data => {
            setEventCard(data);
            console.log(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [id]);

    const loading = isLoading ? null : null;

 return (
      <div className="infoEvent">
        { isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
          ) : (

        <div className="cardEvent">

            <img className="cardEvent__img" src={eventCard.img} alt={eventCard.title} />

            <div className="cardEvent__title">{eventCard.title}, {eventCard.location}</div>
            
            <div className="cardEvent__map">
              {eventCard.lat && eventCard.long && (
                <Map center={{ lat: eventCard.lat, lng: eventCard.long }} />
              )}
              <div className="cardEvent__infogral">
                <div className="cardEvent__infogral-item">

                    <button className="button" onClick={toggleDivPrice}>
                      <div className="icon"><img src={Price}/></div>
                      <div className="info">PRECIOS</div>   
                      </button>                
                      {showDivPrice && (
                        <div className="showDiv">
                          <div className="cardEvent__price">
                            Precios desde {eventCard.price} €
                          </div>
                        </div>
                      )}

                    <button className="button" onClick={toggleDivLink}>
                      <div className="icon"><img src={Web}/></div>
                      <div className="info">CONTACTO</div>   
                      </button>
                        {showDivLink && (
                          <div className="showDiv">
                            <p className="cardEvent__link"> <a href={eventCard.link} target="_blank" rel="noopener noreferrer">Acceda aquí a la web</a></p>
                          </div>) } 

                    <button className="button" onClick={toggleDivDates}>
                      <div className="icon"><img src={Calendar}/></div>
                      <div className="info">FECHAS</div>
                      </button>
                        {showDivDates && (
                          <div className="showDiv">
                            <div className="cardEvent__dates">
                                Desde {eventCard.dtstart} hasta {eventCard.dtend}
                              </div>
                          </div>
                      )}
                </div>
              </div>

            </div>

            <div className={`cardEvent__info ${showAll ? "mostrar" : "mostrar-menos"}`}>{eventCard.info}</div>
              {!showAll ? (
                <button className="button-mostrar" onClick={toggleShowAll}> Mostrar más ▼  </button>
              ) : (<button className="button-mostrar" onClick={toggleShowAll}>▲ Mostrar menos </button>)}
              
            {!eventCard && <p>No se encontró el evento con el ID proporcionado.</p>}
          
          </div>
           )} 
          <Side city={eventCard.city} id={eventCard._id}/>
      </div>
    );
};

export default Event;

