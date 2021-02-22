import React from 'react';
import './featureProduct.styles.scss';

const FeatureProduct = (product) => {
  const {title, imageUrl, proce} = product;

  return (
    <div className="featureProduct">
      <div className="featureImage">
        <img src={imageUrl}
        <div className="namePrice">
          <h3>{title}</h3>
            <p>${price}</p>
            <button className="button is-black nomad-btn" >ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}