import React from 'react';
import { SkillsData } from '../data/data';

function Skills() {

  return (
    <div className="w-full bg-secundary-900 md:h-[800px] " id='skills'>

      <div className="flex relative items-center justify-center bg-secundary-900 pt-28">
        <span className="absolute-cover text-7xl md:text-9xl lg:text-11xl font-black text-primary-500">{SkillsData.title}</span>
        <span className="absolute text-7xl md:text-9xl lg:text-11xl font-black text-secundary-400" >{SkillsData.title}</span>
        <span className="absolute py-10 mt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-app-colortext">{SkillsData.titulo}</span>
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-5">
          {SkillsData.images.map((image) => (
            <div className="flex items-center justify-center" key={image.title}>
              <img
                src={image.icon}
                alt={image.title}
                className="w-20 h-20 sm:w-32 md:w-auto md:h-40 lg:w-48  p-2 rounded-2xl border-yellow-500 border-4 m-6 bg-white"
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

