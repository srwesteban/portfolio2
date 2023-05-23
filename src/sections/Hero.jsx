import React from 'react';
import { Layout, LayoutHero } from '../components/Layout';
import me from '../assets/images/yo.png';
import { HeroData } from '../data/data.js';



const Hero = () => {
  return (
    <section className='pt-[200px] pb-[100px] font-poppins bg-secundary-900'>
      <LayoutHero>
        <section className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start'>
          <aside className='text-center lg:text-left'>

            <section className='px-4 lg:w-[710px] lg:pl-16'>
              <p className='font-extrabold text-4xl text-app-white pt-9'>
                {HeroData.title}
              </p>
              <p className='text-2xl sm:text-3xl md:text-5xl mt-7 text-secundary-50 font-medium '>{HeroData.subTitle}
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
            src={me}
            alt='yo'
            className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[640px] shadow-2xl order-first lg:order-last pl-10'
          />

        </section>
      </LayoutHero>
    </section>
  );
};

export default Hero;
