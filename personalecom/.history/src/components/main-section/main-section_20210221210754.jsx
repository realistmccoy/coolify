import React from 'react';
import { withRouter} from 'react-router-dom'
import naturebg from '../../assets/nature.jpg'
import './main-section.styles.scss'

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={naturebg} alt="nature background" />
        </div>
        <div className="ms-m-description"> 
          <h2>We do </h2>
          <p>
          each photo is thoughtfully created to be the perfect balanace of form and function.
          </p>
          <button className="button is-bulma" id="shop now" onClick={() => history.push('/product/1')}>
          Studio bag
          </button>
        </div>
    
        <div/>
      </div>
    </div>
  )
}
export default withRouter(MainSection)