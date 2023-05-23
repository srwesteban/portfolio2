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

  iconcv: cv,
  title: 'Hola!',
  subTitle:
    'Soy ',  
  ocupation:'Full Stack Developer', 
  description:'Enim pariatur dolore velit in mollit quis ullamco. Veniam do labore ea dolor id duis sunt et ex commodo nostrud ullamco pariatur laboris. Nisi ad ex excepteur sint aute cillum. Deserunt proident sint eiusmod commodo pariatur Lorem incididunt sint pariatur enim. Mollit eu voluptate officia excepteur laboris ea veniam.', 
  btnTextDownloadCv: 'Descargar CV',
  btnTextContact: 'Contactarnos',
};

export const SkillsData = {
 
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
      url: 'https://menu-react-vergaja.vercel.app/',
      icon: vw,
    },
  
  ],
};
