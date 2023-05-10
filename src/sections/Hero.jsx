import React from 'react';
import { Layout } from '../components/Layout';
import UiIcon from '../assets/images/yo.png';
import { HeroData } from '../data/data.js';

const Hero = () => {
  return (
    <section className='py-[250px] pb-[250px] font-roboto bg-black'>
      <Layout>
        <section className='flex justify-between items-center'>
          <aside>
            <section className='w-[488px]'>
              <h1 className='font-semibold text-5xl text-app-white'>
                {HeroData.title}
              </h1>
              <p className='mt-4 text-4xl text-app-white'>{HeroData.subTitle}</p>
              <p className='text-white flex'>{HeroData.masTexto}</p>
              <p className='text-white'>______________</p>
              <p className='text-white flex'>{HeroData.descripcion}</p>

            </section>
            <section className='flex gap-x-4 mt-12'>
              <button className='px-5 py-[10px] text-black bg-yellow-400 rounded-[10px]'>
                {HeroData.btnTextDownloadCv}
              </button>
            </section>
          </aside>
          <img
            src={UiIcon}
            alt='ui'
            className='w-[425px] shadow-2xl'
          />
        </section>
      </Layout>
    </section>
  );
};

export default Hero;
