import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Footer from '../sections/Footer';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        
      </Layout>
      <Tecnologias></Tecnologias>
      <Proyectos></Proyectos>

      <Footer></Footer>
    </>
  );
}

export default App;
