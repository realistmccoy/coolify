import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'

const Layout = () => {


  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    </>
  )
}

export default Layout