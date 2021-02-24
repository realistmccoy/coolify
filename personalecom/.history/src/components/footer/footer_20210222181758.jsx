import React from 'react';
import './footer.styles.scss'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="">
        {year} 
    </div>
  )
}

export default Footer