import React from 'react';
import './hero.styles.scss'

const Hero = () => {
  return (
    <section className="hero is-large is-info">
  <div className="hero-body">
    <p className="title">
      Bags reimagined for modern life
    </p>
    <div className="shop-now">
      <button className="button is-black" id='shop-now'>SHOP NOW</button>
    </div>
  </div>
</section>
  )
}

export default Hero