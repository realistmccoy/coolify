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
          ({values, errors, handleChange, handleSubmit}) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input 
                  type = 'text'
                  name = 'name'
                  onChange={handleChange}
                  value ={values.name}
                  className = {'nomad-input' +}
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