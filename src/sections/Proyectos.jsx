import React, { useEffect, useState } from 'react';

const Proyectos = () => {

  const images = [
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    // Agrega más URLs de imágenes según tus necesidades
  ];

  return (
    
    <div className="w-full bg-black">
      <h1 className="text-3xl font-bold text-center mb-4 text-app-colortext py-10">Proyectos</h1>
      <div className="container mx-auto">
      <div className="grid grid-cols-4 rounded-full">
        {images.map((image, index) => (
          <div className='flex items-center justify-center'>
            <img
            key={index}
            src={image}
            alt={`Imagen ${index}`}
            className="w-32 h-32 object-cover rounded-full border-yellow-500 border-2 my-10"
          />
          </div>
        ))}
      </div>
    </div>

    </div>

)};

export default Proyectos;
