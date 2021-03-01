import React from 'react';
import {withRouter} from 'react-router-dom';

const Total = ({itemCount, total}) => {
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>
          {`Total: ${total}`}
        </p>
        <div className="checkout">
          <button
        </div>
      </div>
    </div>
  )
}