import React from 'react'
import { News, Formulario } from '../config/pages-export'
import '../styles/page-styles.css'



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