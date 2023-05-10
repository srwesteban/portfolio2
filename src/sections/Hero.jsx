import React from 'react';
import { Layout } from '../components/Layout';
import UiIcon from '../assets/images/ui.svg';
import { HeroData } from '../data/data.js';

const Hero = () => {
  return (
    <section className='py-[200px] pb-[150px] font-roboto bg-custom'>
      <Layout>
        <section className='flex justify-between items-center'>
          <aside>
            <section className='w-[488px]'>
              <h1 className='font-semibold text-5xl text-app-white'>
                {HeroData.title}
              </h1>
              <p className='mt-4 text-lg text-app-white'>{HeroData.subTitle}</p>
            </section>
            <section className='flex gap-x-4 mt-12'>
              <button className='px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                {HeroData.btnTextDownloadCv}
              </button>
              <button className='px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                {HeroData.btnTextContact}
              </button>
            </section>
          </aside>
          <img
            src={UiIcon}
            alt='ui'
            className='w-[425px] shadow-2xl rotate-3'
          />
        </section>
      </Layout>
    </section>
  );
};

export default Hero;
