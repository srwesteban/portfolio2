import { LayoutFooter } from '../components/Layout';
import React, { useEffect } from 'react';
import ws from './../assets/images/whatsapp.svg'
import outlook from './../assets/images/outlook.svg'


const Footer = () => {

  return (

    <LayoutFooter>

      <footer className="bg-secundary-900 py-4 font-poppins w-full" id='footer'>

        <seccion className="flex relative items-center justify-center text-3xl font-bold text-center p-20 h-[650px] ">
          <span className="text-4xl sm:text-6xl md:text-10xl absolute-cover text-secundary-300">See you!</span>
          <span className="text-4xl sm:text-6xl md:text-10xl absolute  ">See you!</span>
          <span className="text-2xl sm:text-4xl md:text-6xl absolute py-20 mt-20 font-bold text-center text-secundary-50">Hasta la proxima!</span>
        </seccion>

        <seccion className=" px-2 flex items-end h-[200px] gap-6  text-white text-lg pt-10">
          <img className='w-10' src={ws} alt="" />
          <span className=''>WhatsApp: +573215098953</span>
          <img className='w-10' src={outlook} alt="" />
          <span className=''>Email: <a href="mailto:sr.w@hotmail.com">sr.w@hotmail.com</a></span>
          <span className="pl-28 ml-28">
            © William David Esteban Mora - 2023 Todos los derechos reservados
          </span>
        </seccion>

        <section>
          
        </section>
      </footer>

    </LayoutFooter>

  );
}

export default Footer;
