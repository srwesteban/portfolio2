import React from 'react';
import { SkillsData } from '../data/data';

function Skills() {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
     {SkillsData},
    'https://res.cloudinary.com/practicaldev/image/fetch/s--ktYESCeQ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg',
    'https://img.freepik.com/iconos-gratis/serpientes_318-368381.jpg',
    'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://vitejs.dev/logo-with-shadow.png',
    'https://desarrolloweb.com/storage/tag_images/actual/BzOL16MEqsKOe0VThjF6FXPBi0uyK16lkTety9Wz.png',
    
  ];

  return (
    <div className="w-full bg-secundary-900">

      <div className="flex flex-col items-center justify-center bg-black text-3xl font-bold text-center p-20 ">
          <span className="absolute text-11xl font-black text-white">Skills</span>
          <span className="absolute text-11xl font-black">Skills</span>
          <h1 className="absolute py-20 mt-20 text-4xl font-bold text-center text-app-colortext">Habilidades</h1>
      </div>
      <div className="container mx-auto">
      <div className="grid grid-cols-4 rounded-full">
        {images.map((image, index) => (
          <div className='flex items-center justify-center'>
            <img
            key={index}
            src={image}
            alt={`Imagen ${index}`}
            className="w-40 h-54 rounded-full border-yellow-500 border-2 my-10"
          />
          </div>
        ))}
      </div>
    </div>
    </div>

    
  );
}

export default Skills;

