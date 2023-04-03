import '../styles/Formulario.css';
import Events from './Events';
import { getEventsApi } from '../services/events';
import { useState, useEffect } from 'react';
import { useFilterEvents } from '../hooks/Formulario/filtered-events';
import { useHandleFiltersChange } from '../hooks/Formulario/state-filters';


function Formulario() {
  const [events, setEvents] = useState([])
  const { handleTitle, handleCategory, handleCity, handleStartDate, handlePrice, handleEndDate, filters, maxPrice } = useHandleFiltersChange()
  const { filteredEvents } = useFilterEvents({ events, filters})

  useEffect(() => {
    getEventsApi().then(data => setEvents(data))
  },[])

  return (
    <div className='main-container'>
    <form className="form-container">
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
       { filteredEvents?.length === 0 
       ? <p className='no-results'>Lo sentimos, no hay ningún evento con estas características. Prueba otra vez</p> 
       : <div>
      <Events events={filteredEvents} />
      </div>
       }

    </div>
  );
}

export default Formulario;
