import logo from './../assets/images/logo.svg';
import twitter from './../assets/images/twitter.svg';
import github from './../assets/images/github.svg';
import instagram from './../assets/images/instagram.svg';
import gitlab from './../assets/images/gitlabd.svg'
import cv from './../assets/images/cv.png'
import csharp from './../assets/images/csharp.svg'
import js from './../assets/images/js.png'
import html from './../assets/images/html.svg'
import css from './../assets/images/css.svg'
import tw from './../assets/images/tw.svg'
import angular from './../assets/images/angular.svg'
import react from './../assets/images/react.svg'
import java from './../assets/images/java.svg'
import python from './../assets/images/python.svg'
import vite from './../assets/images/vitejs.svg'
import figma from './../assets/images/clon.png'
import vw from './../assets/images/vw.png'
import gato from './../assets/images/gato.png'
import ws from './../assets/images/whatsapp.svg'
import outlook from './../assets/images/outlook.svg'
import me from './../assets/images/yo.png';





export const HeaderData = {
  logo: {
    title: 'UCC',
    link: 'index.html',
    icon: logo,
  },
  nav: [
    {
      title: 'Inicio',
    },
    {
      title: 'Habilidades',
    },
    {
      title: 'Proyectos',
    },

  ],
  social: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/westeban12',
      icon: twitter,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/srwesteban',
      icon: github,
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/lavergaja/',
      icon: instagram,
    },
    {
      title: 'gitlab',
      url: 'https://gitlab.com/Ing.W',
      icon: gitlab,
    },

  ],
};

export const HeroData = {

  me: me,
  iconcv: cv,
  title: 'Hola!',
  subTitle:
    'Soy ',  
  ocupation:'Software Developer', 
  description: 'Ingeniero de software apasionado con una sólida habilidad para programar. Disfruto tanto del desarrollo frontend como del backend y me motiva crear soluciones completas y funcionales.',
  btnTextDownloadCv: 'Descargar CV',
  btnTextContact: 'Contactarnos',
};

export const SkillsData = {

  title: "Skills",
  titulo: "Habilidades",
 
  images: [
    {
      title: 'js',
      icon: js,
    },
    {
      title: 'html',
      icon: html,
    },
    {
      title: 'css',
      icon: css,
    },
    {
      title: 'tw',
      icon: tw,
    },
    {
      title: 'angular',
      icon: angular,
    },
    {
      title: 'react',
      icon: react,
    },
    {
      title: 'java',
      icon: java,
    },
    {
      title: 'c#',
      icon: csharp,
    },
    {
      title: 'python',
      icon: python,
    },
    {
      title: 'vite',
      icon: vite,
    },
  ],
};
export const ProjectsData = {

  title: "My projects",
  titulo: 'Mis proyectos',
 
  images: [
    {
      url: 'https://clonar-figma.vercel.app/',
      icon: figma,
    },
    {
      url: 'https://memory-game-lac-gamma.vercel.app/',
      icon: gato,
    },
    {
      url: 'https://proyecto-concesionario.vercel.app/',
      icon: vw,
    },
  
  ],
};

export const FooterData = {

  whatsapp: 'WhatsApp: +573215098953',
  iconw: ws,
  iconout: outlook,
  email: 'sr.w@hotmail.com!',
  copyright: '© William David Esteban Mora - 2023 Todos los derechos reservados'
};
