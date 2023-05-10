import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
// import reactLogo from './assets/react.svg';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        <Services></Services>
      </Layout>
    </>
  );
}

export default App;
