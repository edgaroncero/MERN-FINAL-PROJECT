import React, { useState, useEffect } from 'react';
import Events from './Events';
import News from './News';
import '../styles/Formulario.css';
import News from './News';

//https://server-chi-ten.vercel.app/events

function Formulario() {
  const [maxPrice, setMaxPrice] = useState(600)
  const [events, setEvents] = useState([])
  const [filters, setFilters] = useState({
    title: '',
    category: 'All',
    city: 'All',
    startDate: '',
    endDate: '',
    maxPrice: 600
  })

  useEffect(() => {
    fetch('https://eventasia-server.vercel.app/events')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])
  
  const filterEvents = (events) => {
    const startDate = filters.startDate.split('/').reverse().join('-')
    const endDate = filters.endDate.split('/').reverse().join('-')
    return events.filter(event => {
      return (
        event.price <= filters.maxPrice &&
         (
           !filters.title ||
           event.title.toLowerCase().includes(filters.title.toLowerCase())
         ) &&
         (
            filters.category === 'All' ||
            event.category === filters.category
         ) && 
         (
           filters.city === 'All' ||
           event.city === filters.city
         ) && 
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

  const filteredEvents = filterEvents(events);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(filteredEvents)
  }

  const handleTitle = (e) => {
    setFilters(prevState => ({ ...prevState, title: e.target.value }))
  }
 
  const handleCategory = (e) => {
    setFilters(prevState => ({ ...prevState, category: e.target.value }))
  }

  const handleCity = (e) => {
    setFilters(prevState => ({ ...prevState, city: e.target.value }))
  }

  const handleStartDate = (e) => {
    setFilters(prevState => ({ ...prevState, startDate: e.target.value }))
  }

  const handlePrice = (e) => {
    setMaxPrice(e.target.value)
    setFilters(prevstate => ({...prevstate, maxPrice: e.target.value}))
  }

  const handleEndDate = (e) => {
    setFilters(prevState => ({ ...prevState, endDate: e.target.value }))
  }


  return (
    <div className='main-container'>
    <form onSubmit={handleSubmit} className="form-container">
       <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input onChange={handleTitle} 
               type="text" 
               id="nombre" 
               name="nombre"
               placeholder='Introduce el nombre de un evento para buscar por título'
                />
      </div> 
      
      <div className="section doble">
        <div className="section">
          <label htmlFor="ciudad">Ciudad:</label>
          <select onChange={handleCity} id="ciudad" name="ciudad">
            <option value="All">Todas</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Zaragoza">Zaragoza</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Pamplona">Pamplona</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Gijón">Gijón</option>
            <option value="Arriondas">Arriondas</option>
          </select>
        </div>

        <div className="section">
          <label htmlFor="categoria">Categoría:</label>
          <select onChange={handleCategory} id="categoria" name="categoria">
          <option value="All">Cualquiera</option>
           <option value="Socio Cultural">Socio Cultural</option>
           <option value="Belleza y Salud">Belleza y Salud</option>
            <option value="Gastronomía">Gastronomía</option>
            <option value="Actividades Infantiles">Actividades Infantiles</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Deportes y Aventura">Deportes y Aventura</option>
            <option value="Educación">Educación</option>
          </select>
        </div>
      </div>

       <div className="section doble">
        <div className="section">
          <label htmlFor="fecha-inicio">Fecha de inicio:</label>
          <input onChange={handleStartDate} type="date" id="fecha-inicio" name="fecha-inicio" />
        </div>

        <div className="section">
          <label htmlFor="fecha-fin">Fecha de fin:</label>
          <input onChange={handleEndDate} type="date" id="fecha-fin" name="fecha-fin" />
        </div>
      </div> 

      <div className="section">
        <label htmlFor="precio">Precio:</label><span>{ maxPrice == 0 ? 'Free' : `${maxPrice}€`}</span>
        <input value={maxPrice} onChange={handlePrice} type="range" id="precio" name="precio" min="0" max="600" step="1" />
      </div>

      <button type="submit">Enviar</button>
    </form>
       { filteredEvents.length === 0 
       ? <p className='no-results'>Lo sentimos, no hay ningún evento con estas características. Prueba otra vez</p> 
       : <div>
      <Events events={filteredEvents} />
      </div>
       }

    </div>
  );
}

export default Formulario;
