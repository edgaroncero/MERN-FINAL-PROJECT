import React from 'react'
import { Events, News, Formulario } from '../config/pages-export'


function Home() {

  return (
    <div className='home-container'>
      <Formulario />
      {/* //Eventos proximos */}
      <News /> 
    </div>
  )
}

export default Home