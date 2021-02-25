import React from 'react';
import { withRouter} from 'react-router-dom'
import './featureProduct.styles.scss';

const FeatureProduct = (product) => {
  const {title, imageUrl, price} = product;

  return (
    <div className="featureProduct">
      <div className="featureImage" onClick={()}>
        <img src={imageUrl} alt='product' />
        <div className="namePrice">
          <h3>{title}</h3>
            <p>$ {price}</p>
            <button className="button is-black nomad-btn" >ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default FeatureProduct