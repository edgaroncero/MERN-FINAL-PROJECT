import React, { useState } from 'react';

function News() {
  const [matérias, setMatérias] = useState([
    {
      id: 1,
      imagem: 'https://images.ecestaticos.com/0CoeaEZOgkgTWOCKVelew4uQ8JA=/0x0:1000x750/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8d5%2Fa6b%2F4d1%2F8d5a6b4d1ca972753ff6e55729dfe37c.jpg',
      titulo: 'Destinos para teletrabajar en España',
      texto: 'Si te planteas un cambio de vida y te gustaría desarrollar tu profesión en un entorno diferente y completamente seguro, disfrutando de la naturaleza, las playas, la cultura, la gastronomía y el buen clima de España, aquí encontrarás varios destinos que te ofrecerán el espacio de trabajo que estás buscando. Lugares con estupendas condiciones climáticas, compatibilidad horaria laboral con buena parte del mundo, infraestructuras de primer nivel y conexiones directas con las principales ciudades europeas. Dile adiós al estrés de la rutina diaria y dale la vuelta a tu futuro laboral mientras conoces España.'
    },
    {
      id: 2,
      imagem: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/canarias/joven-surf-tenerife-s1633569157.jpg_428131509.jpg',
      titulo: 'Las mejores playas de las Islas Canarias para hacer surf',
      texto: 'Bañadas en el océano Atlántico, las playas de las Islas Canarias cuentan con algunos de los mejores lugares para hacer surf en toda Europa. Es más, se encuentran entre los destinos europeos más importantes para disfrutar de una gran oferta de deportes acuáticos. Muchos aficionados y profesionales del deporte visitan las islas para aprender a surfear en sus numerosas escuelas y disfrutar de la temperatura de sus aguas, que oscilan en torno a los 20 grados durante casi todo el año. Un permanente clima primaveral, acompañado por vientos alisios y olas de calidad en playas de ensueño, ¿te apuntas?.'
    },
  ]);

  return (
    <div className="news-container">
    <h1>Noticias</h1>
      {matérias.map(matéria => (
        <div key={matéria.id} className="noticia">
          <img src={matéria.imagem} alt={matéria.titulo} />
          <h3>{matéria.titulo}</h3>
          <p>{matéria.texto}</p>
         {/*  <Link to={`/news/${matéria.id}`}>Leia mais</Link> */}
        </div>
      ))}
    </div>
  );
}

export default News