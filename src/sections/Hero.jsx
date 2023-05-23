import React from 'react';
import { Layout, LayoutHero } from '../components/Layout';
import UiIcon from '../assets/images/yo.png';
import { HeroData } from '../data/data.js';



const Hero = () => {
  return (
    <section className='py-[200px] pb-[200px] font-poppins bg-black'>
      <LayoutHero>
        <section className='flex justify-between items-start pl-8 py-6'>
          <aside>
            <section className='w-[740px] mx-15 p-8'>
              <p className='font-extrabold text-4xl text-app-white'>
                {HeroData.title}
              </p>
              <p className='mt-7 text-5xl text-app-white font-medium '>{HeroData.subTitle}
              <span class="text-app-colortext">William Esteban</span>
              </p>
              
              <p className='text-secundary-300 text-2xl pt-4'><span className='text-primary-400'>{"{ "}</span>{HeroData.masTexto}
              <span className='text-primary-400'>{" }"}</span>
              
              </p>
              <p className='text-secundary-300 font-roboto font-extrabold text-2xl'>________</p>
              <p className='text-secundary-300 py-4 pb-8 text-xl text-justify'>{HeroData.descripcion}</p>

              <button className='flex items-center px-5 py-[10px] text-black bg-primary-500 rounded-[6px] font-extrabold'>

                <img className='m-2' src={HeroData.iconcv} alt="cv" />
                  {HeroData.btnTextDownloadCv}

              </button>

            </section>
          </aside>
          <img
            src={UiIcon}
            alt='ui'
            className='w-[640px] shadow-2xl'
          />

        </section>
      </LayoutHero>
    </section>
  );
};

export default Hero;
