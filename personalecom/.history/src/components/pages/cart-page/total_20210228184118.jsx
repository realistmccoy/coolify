import React from 'react';
import {withRouter} from 'react-router-dom';

const Total = ({itemCount, total}) => {
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>
          
        </p>
      </div>
    </div>
  )
}