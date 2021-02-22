import React from 'react';
import './featureProduct.styles.scss';

const FeatureProduct = (product) => {
  const {title, imageUrl, proce} = product;

  return (
    <div className="featureProduct">
      <div className="featureImage">
        <div className="namePrice">
          <h3></h3>
        </div>
      </div>
    </div>
  )
}