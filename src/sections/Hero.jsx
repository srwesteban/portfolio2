import React from 'react';
import { Layout, LayoutHero } from '../components/Layout';
import UiIcon from '../assets/images/yo.png';
import { HeroData } from '../data/data.js';



const Hero = () => {
  return (
    <section className='py-[200px] pb-[200px] font-poppins bg-black'>
      <LayoutHero>
        <section className='flex justify-between items-start pl-8'>
          <aside>
            <section className='w-[800px] mx-15 p-8'>
              <p className='font-extrabold text-4xl text-app-white'>
                {HeroData.title}
              </p>
              <p className='mt-8 text-5xl text-app-white font-medium py-4'>{HeroData.subTitle}
              <span class="text-app-colortext">William Esteban</span>
              </p>
              <p className='text-secundary-300 text-2xl'>{HeroData.masTexto}</p>
              <p className='text-secundary-300 font-roboto'>______________</p>
              <p className='text-secundary-300'>{HeroData.descripcion}</p>

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
