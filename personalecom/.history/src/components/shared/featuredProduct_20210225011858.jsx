import React from 'react';
import {isInCart} f
import { withRouter} from 'react-router-dom'
import './featureProduct.styles.scss';

const FeatureProduct = (props) => {
  const {title, imageUrl, price, history, id} = props;

  return (
    <div className="featureProduct">
      <div className="featureImage" onClick={() => history.push(`/product/${id}`)}>
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

export default withRouter(FeatureProduct)