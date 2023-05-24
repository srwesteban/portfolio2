import { FooterData } from '../data/data';


const Footer = () => {

  return (


    <div className="flex flex-col items-center justify-center bg-secundary-900" id="footer">
     <div className="bg-secundary-900 p-20 lg:m-24">
       <section className="relative flex flex-col items-center justify-center bg-secundary-900">
         <span className="text-3xl md:text-6xl lg:text-7xl font-black text-secundary-500">Contact me!</span>
         <span className="absolute mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-app-colortext">Contactame!</span>
       </section>
     </div>

     <section className="flex justify-center flex-wrap items-center  gap-6 m-6 mt-20 sm:pt-20 text-white text-lg">
       <img className=" ml-2  w-4 sm:w-10" src={FooterData.iconw} alt="" />
       <span className='mr-9 text-md sm:'>{FooterData.whatsapp}</span>
       <br />
       <img className="w-4 text-md sm:w-10" src={FooterData.iconout} alt="" />
       <span>Email: <a href="mailto:sr.w@hotmail.com">{FooterData.email}</a></span>
       <span className="text-center ml-0 sm:ml-10 ">
         {FooterData.copyright}
       </span>
     </section>
    </div>


  )
}

export default Footer;
