import React from 'react';


export const LayoutHeader = ({ children }) => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-[1400px] font-poppins xl:px-0'>
      {children}
    </div>
  );
};

export const LayoutHero = ({ children }) => {
  return <main className='mx-auto max-w-[1500px] lg:px-5'>{children}</main>;
};

export const LayoutTecnologies = ({ children }) => {
  return <main className='mx-auto max-w-[1000px] lg:px-5'>{children}</main>;
};

export const Layout = ({ children }) => {
  return <main className='mx-auto max-w-[990px]'>{children}</main>;
};

export const LayoutTitles = ({ children }) => {
  return <main className='mx-auto max-h-[100px]'>{children}</main>;
};