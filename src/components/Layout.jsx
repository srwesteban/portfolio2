import React from 'react';

export const LayoutHeader = ({ children }) => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-[1140px] font-roboto'>
      {children}
    </div>
  );
};

export const Layout = ({ children }) => {
  return <main className='mx-auto max-w-[990px]'>{children}</main>;
};
