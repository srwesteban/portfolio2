import { LayoutHeader } from './../components/Layout';
import { HeaderData } from '../data/data.js';
import React, { useEffect } from 'react';





const Header = () => {

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    footerSection.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    function goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const btnGoToTop = document.getElementById('btnGoToTop');
    if (btnGoToTop) {
      btnGoToTop.addEventListener('click', goToTop);
    }
    return () => {
      if (btnGoToTop) {
        btnGoToTop.removeEventListener('click', goToTop);
      }
    };
  }, []);

  return (
    <header className='fixed top-0 p-10 w-screen bg-secundary-900 font-poppins z-50'>
      <LayoutHeader>
        <section className='hidden md:flex items-center md:flex-row md:items-center md:gap-8 rounded-full'>
          {HeaderData.social.map((item) => (
            <div className="bg-gradient-to-r from-primary-900 to-secundary-800 p-3 rounded-full" key={item.title}>
              <a href={item.url} target="_blank" rel="n">
                <img
                 className="w-6 h-6"
                 src={item.icon}
                 alt={item.title}
                />
              </a>
            </div>
          ))}
        </section>
        <nav className='text-sm md:text-md lg:text-xl font-medium'>
          <ul className='flex items-center gap-x-4 md:gap-x-10 text-white'>
            <button id='btnGoToTop' className='text-white'>Inicio</button>
            <button onClick={scrollToSkills} className='text-white'>Habilidades</button>
            <button onClick={scrollToProjects} className='text-white'>Proyectos</button>
            <button onClick={scrollToFooter} className='px-4 py-2 md:mr-4 text-app-colortext bg-transparent border-2 rounded-[5px] border-primary-400'>Contacto</button>
          </ul>
        </nav>
      </LayoutHeader>
    </header>

  );
};

export default Header;
