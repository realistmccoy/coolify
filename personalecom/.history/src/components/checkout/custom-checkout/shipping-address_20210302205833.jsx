import React from 'react';
import { Formik } from 'react-formik';

const ShippingAddress = () => {
  return (
    <div>
      <h4>
        Shipping Address
      </h4>
      <Formik>
        {
          ({value, errors, handleChange, handleSubmit}) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input 
                  
                  />
                </div>
              </form>
            )
          }
        }
      </Formik>
    </div>
  )
}