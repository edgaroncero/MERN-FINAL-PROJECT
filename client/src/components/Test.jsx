import React, { useState } from 'react';

function Test() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', selectedFile);
    formData.append('title', title);
    formData.append('category', category);

    const URL = 'https://eventasia-server.vercel.app/events/add';
    // Aquí podrías hacer una petición al servidor para enviar el archivo
    // utilizando la librería fetch o axios, por ejemplo.
    fetch(URL, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Selecciona un archivo:
        <input type="file" onChange={handleFileInput} />
      </label>
      <label>
        Ingresa un título:
        <input type="text" value={title} onChange={handleTitleInput} />
      </label>

      
      <label>
        Categoría:
        <input type="text" value={category} onChange={handleCategoryInput} />
      </label>
      <button type="submit">Xrear Evento</button>
    </form>
  );
}


export default Test;