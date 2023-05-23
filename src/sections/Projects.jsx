import React from 'react';
import { SkillsData } from '../data/data';

function Projects() {

  return (
    <div className="w-full bg-secundary-900 h-[800px] pt-[100px]" id='projects'>

      <div className="flex relative items-center justify-center bg-secundary-900 p-28">
        <span className="absolute-cover text-7xl md:text-9xl lg:text-11xl font-black text-white">Projects</span>
        <span className="absolute text-7xl md:text-9xl lg:text-11xl font-black">Projects</span>
        <span className="absolute py-20 mt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-app-colortext">Proyectos</span>
      </div>


      <div className="container mx-auto ">
      <div className="grid grid-cols-5 ">
        {SkillsData.images.map((images) => (
          <div className='flex items-center justify-center' key = {images.title}>
            <img
            
            src={images.icon}
            alt={images.title}
            className="w-40 h-40 p-2 rounded-2xl border-yellow-500 border-4 m-6 bg-white "
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;

