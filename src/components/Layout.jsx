import React from 'react';


export const LayoutHeader = ({ children }) => {
  return (
    <div className='flex flex-col justify-between items-center mx-auto px-4 max-w-[1320px] font-poppins md:flex-row md:justify-between md:items-center md:px-8 lg:px-12'>
      {children}
    </div>
  );
};

export const LayoutHero = ({ children }) => {
  return <main className='mx-auto my-5'>{children}</main>;
};

export const LayoutTecnologies = ({ children }) => {
  return <main className='mx-auto max-w-[1000px] lg:px-2'>{children}</main>;
};

export const Layout = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-2'>{children}</main>;
};

export const LayoutFooter = ({ children }) => {
  return <main className='mx-auto max-w-[1500px] lg:px-0'>{children}</main>;
};

