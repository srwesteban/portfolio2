import { LayoutFooter } from '../components/Layout';
import React, { useEffect } from 'react';


const Footer = () => {

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

    <LayoutFooter>

      <footer className="bg-secundary-900 py-4 w-screen h-screen font-poppins">

        <seccion className="flex relative items-center justify-center text-3xl font-bold text-center p-20 h-[750px] ">
          <span className="absolute-cover text-12xl  text-secundary-300">See you!</span>
          <span className="absolute text-12xl ">See you!</span>
          <span className="absolute py-20 mt-20 text-6xl font-bold text-center text-secundary-50">Hasta la proxima!</span>
        </seccion>

        <seccion className="container mx-auto px-4 flex justify-star items-end h-[150px] justify-between">
          <span className="text-white text-lg pb-5 pt-10">
            © William David Esteban Mora - 2023 Todos los derechos reservados
          </span>
        </seccion>
      </footer>

    </LayoutFooter>

  );
}

export default Footer;
