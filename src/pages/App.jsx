import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Footer from '../sections/Footer';
import Languages from '../sections/Languages';
import Proyectos from '../sections/Proyectos';
import Titles from '../sections/titles';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Titles/>
      <Languages/>
      <Proyectos/>
     
      <Footer/>
    </>
  );
}

export default App;
