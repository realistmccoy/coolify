import React from 'react';
import './hero.styles.scss';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
  <div className="hero-body">
    <h1 className="title">
      Ramon Giron II
    </h1>
    <h4 className="hero-title title">
    each photo is thoughtfully created to be the perfect balanace of form and function.
    </h4>
    <div className="shop-now">
      <button className="button is-black" id='shop-now'
        onClick={() => {}}
      > <Link to='/shop' > SHOP SERVICE</Link>
        </button>
    </div>
  </div>
</section>
  )
}

export default Hero;