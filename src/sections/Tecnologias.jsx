import React from 'react';

function Tecnologias() {
  const images = [
    'https://thumbs.dreamstime.com/b/logotipo-de-java-118452997.jpg',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--ktYESCeQ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    'https://desarrolloweb.com/storage/tag_images/actual/BzOL16MEqsKOe0VThjF6FXPBi0uyK16lkTety9Wz.png',
    'https://img.freepik.com/iconos-gratis/serpientes_318-368381.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
    'https://vitejs.dev/logo-with-shadow.png',
    // Agrega más URLs de imágenes según tus necesidades
  ];

  return (
    <div className="w-full bg-black">
      <h1 className="text-3xl font-bold text-center mb-4 text-app-colortext p-10">Tecnologias</h1>
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

    
  );
}

export default Tecnologias;

