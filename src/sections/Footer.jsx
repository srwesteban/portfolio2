import ws from './../assets/images/whatsapp.svg'
import outlook from './../assets/images/outlook.svg'


const Footer = () => {

  return (


    <div className="grid grid-cols-[80fr, 20fr] w-full bg-secundary-900" id='footer'>
     <section className="flex items-center justify-center bg-secundary-900 h-[550px]">
       <span className="absolute text-5xl md:text-6xl lg:text-7xl font-black text-secundary-500">Contact me!</span>
       <span className="absolute py-6 mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-app-colortext">Contactame!</span>
     </section>
   
     <section className="flex items-center gap-4 m-4 text-white text-lg h-[100px]">
        <img className='w-10' src={ws} alt="" />
        <span>WhatsApp: +573215098953</span>
        <img className='w-10' src={outlook} alt="" />
        <span>Email: <a href="mailto:sr.w@hotmail.com">sr.w@hotmail.com</a></span>
        <span className="pl-28 ml-28">
          © William David Esteban Mora - 2023 Todos los derechos reservados
        </span>
      </section>

    </div>

  )
}

export default Footer;
