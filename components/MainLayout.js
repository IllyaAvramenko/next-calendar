import React from 'react';
import Head from 'next/head'
import Header from './header/Header';
import s from '../styles/Header.module.scss';

const MainLayout = ({children}) => {
   return (
      <div className={s.headerWrapper}>
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500" rel="stylesheet"/>
      </Head>
         <Header/>
         {children}
      </div>
   )
};

export default MainLayout;