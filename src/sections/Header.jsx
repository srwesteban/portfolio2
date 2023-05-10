import React from 'react';
import { LayoutHeader } from './../components/Layout';
import { HeaderData } from '../data/data.js';

const Header = () => {
  return (
    <header className='fixed py-4 w-screen'>
      <LayoutHeader>
        <img src={HeaderData.logo.icon} alt={HeaderData.logo.title} />
        <nav>
          <ul className='flex items-center gap-x-6 text-app-white font-semibold'>
            {HeaderData.nav.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </nav>
        <section className='flex items-center gap-x-4'>
          {HeaderData.social.map((item) => (
            <img src={item.icon} alt={item.title} />
          ))}
        </section>
      </LayoutHeader>
    </header>
  );
};

export default Header;
