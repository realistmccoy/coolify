import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
  <div className="hero-body">
    <h1 className="title">
      4pillar
    </h1>
    <h1 className="hero-title">
    we make products that effortlessly transition from day to night, from the board room to the fitness studio, and everywhere in between, each 4pillar is thoughtfully created to be the perfect balanace of form and function.
    </h1>
    <div className="shop-now">
      <button className="button is-black" id='shop-now'>SHOP NOW</button>
    </div>
  </div>
</section>
  )
}

export default Hero;