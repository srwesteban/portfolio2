import React from 'react';
import { LayoutHeader } from './../components/Layout';
import { HeaderData } from '../data/data.js';


const Header = () => {
  return (
    <header className='fixed py-4 w-screen'>
      <LayoutHeader>
        <section className='flex items-center gap-x-4'>
          {HeaderData.social.map((item) => (
            <img src={item.icon} alt={item.title} />
          ))}
        </section>
        <nav>
          <ul className='flex items-center gap-x-6 text-white font-semibold'>
            {HeaderData.nav.map((item) => (
              <li>{item.title}</li>
            ))}
            <button className='px-5 py-[10px] text-app-colortext bg-yellow-500 rounded-[32px]'>Contacto</button>

          </ul>
        </nav>
      </LayoutHeader>
    </header>
  );
};

export default Header;
