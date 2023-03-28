import React, { useState } from 'react';
import Events from './Events';
import '../styles/Formulario.css';

function Formulario() {
  const [filters, setFilters] = useState({
    name: '',
    city: '',
    category: 'All',
    city: 'All',
    startDate: '',
    endDate: '',
    price: '',
    maxPrice: ''
  })
  return (
    <div>
    <form className="form-container">
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
      </div>
      
      <div className="section doble">
        <div className="section">
          <label htmlFor="ciudad">Ciudad:</label>
          <select id="ciudad" name="ciudad">
            <option value="All">Todas</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Bilbao">Bilbao</option>
            <option value="Valencia">Valencia</option>
            <option value="Gijón">Gijón</option>
            <option value="Arriondas">Arriondas</option>
          </select>
        </div>

        <div className="section">
          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria">
          <option value="All">Cualquiera</option>
           <option value="Entertainment">Sociocultural</option>
            <option value="Tecnología">Entretenimiento</option>
            <option value="Gatronomic">Gastronomía</option>
            <option value="Sports and Adventures">Deporte y Aventura</option>
            <option value="Beauty and Wellness">Belleza y Bienestar</option>
            <option value="Educative">Educativo</option>
          </select>
        </div>
      </div>

      <div className="section doble">
        <div className="section">
          <label htmlFor="fecha-inicio">Fecha de inicio:</label>
          <input type="date" id="fecha-inicio" name="fecha-inicio" />
        </div>

        <div className="section">
          <label htmlFor="fecha-fin">Fecha de fin:</label>
          <input type="date" id="fecha-fin" name="fecha-fin" />
        </div>
      </div>

      <div className="section">
        <label htmlFor="precio">Precio:</label>
        <input type="range" id="precio" name="precio" min="0" max="100" step="1" />
      </div>

      <button type="submit">Enviar</button>
    </form>
    <Events filters={filters} />
    </div>
  );
}

export default Formulario;
