import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
  <div className="hero-body">
    <h className="title">
      Ramon Giron II
    </h>
    <h1 className="hero-title title">
    each photo is thoughtfully created to be the perfect balanace of form and function.
    </h1>
    <div className="shop-now">
      <button className="button is-black" id='shop-now'
        onClick={() => {}}
      >
        SHOP SERVICE</button>
    </div>
  </div>
</section>
  )
}

export default Hero;