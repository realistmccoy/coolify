import React from 'react';
import Layout from './shared/layout'
import Hero from './hero/hero'
import MainSection from './main-section/main-section'
import Featured from './featureCollection/featureCollection'

const HomePage = () => {
  return (
    <>
    <Layout>
      <Hero/>
      <MainSection/>
      <Featured/>
    </Layout>
    </>
  )
}