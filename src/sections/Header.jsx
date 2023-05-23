import React from 'react';
import { LayoutHeader } from './../components/Layout';
import { HeaderData } from '../data/data.js';


const Header = () => {
  return (
    <header className='fixed p-10 w-screen bg-secundary-900 font-poppins'>
      <LayoutHeader>
        <section className='flex items-center gap-7 rounded-full'>
          {HeaderData.social.map((item) => (

            <div className="bg-gradient-to-r from-primary-900 to-secundary-800 p-3 rounded-full" key={item.title}>
              <img
             className="w-6 h-6"
              src={item.icon}
             alt={item.title}
            />
          </div>
          ))}
        </section>
        <nav>
          <ul className='flex items-center gap-x-8 text-white font-semibold'>
            {HeaderData.nav.map((item) => (
              <li>{item.title}</li>
            ))}
            <button className='px-5 py-[10px] mr-20 pr-10 text-app-colortext bg-yellow-500 rounded-[32px]'>Contacto</button>

          </ul>
        </nav>
      </LayoutHeader>
    </header>
  );
};

export default Header;
