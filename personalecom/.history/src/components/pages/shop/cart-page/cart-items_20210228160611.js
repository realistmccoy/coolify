import React from 'react
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../../icons/index'

const CartItem = (product) => {
  const { title, imageUrl, price, quantity} = product;

  return (
    <div>
      <div>
        <img src={imageUrl} alt='product' />

      </div>
      <div className='name-price'>
        <h4>
          {title}
        </h4>
        
      </div>
    </div>
  )
}
