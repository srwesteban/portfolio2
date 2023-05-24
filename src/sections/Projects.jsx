import React from 'react';
import { ProjectsData,} from '../data/data';

function Projects() {

  return (

    <div className="w-full bg-secundary-900 h-full pt-28 " id='projects'>

      <div className="flex relative items-center justify-center bg-secundary-900">
        <span className="absolute-cover text-4xl md:text-9xl lg:text-11xl font-black text-primary-500">{ProjectsData.title}</span>
        <span className="absolute text-4xl md:text-9xl lg:text-11xl font-black text-secundary-400" >{ProjectsData.title}</span>
        <span className="absolute py-20 mt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-app-colortext">{ProjectsData.titulo}</span>
      </div>

      <div className="container mx-auto mt-20 pb-32">
        <div className="grid sm:grid-cols-3">
          {ProjectsData.images.map((image) => (
            <div className="flex items-center justify-center" key={image.title}>
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.icon}
                  alt={image.title}
                  className="w-80 h-60 sm:w-32 md:w-[200px] md:h-[300px] lg:h-[300px] lg:w-[400px] gap-6 rounded-2xl border-yellow-500 border-4 m-6 bg-white"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );

}

export default Projects;

