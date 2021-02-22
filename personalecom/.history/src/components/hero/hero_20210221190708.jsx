import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
  <div className="hero-body">
    <h1 className="title">
      Ramon Giron II
    </h1>
    <p>
      Software Developer
    </p>
    <div className="shop-now">
      <button className="button is-black" id='shop-now'>SHOP NOW</button>
    </div>
  </div>
</section>
  )
}

export default Hero;