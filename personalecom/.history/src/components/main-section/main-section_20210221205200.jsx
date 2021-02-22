import React from 'react';
import { withRouter} from 'react-router-dom'
import studioBag from '../../assets/2169842.svg'
import './main-section.styles.scss'

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src="studioBag" alt="studio bag" />
        </div>
        <div className="ms-m-description"> 
          <h2>Designed for Crafted for sport</h2>
          <p>
            we make products that effortlessly transition from day to night, from the board room to the fitness studio, and everywhere in between, each 4pillar is thoughtfully created to be the perfect balanace of form and function.
          </p>
          <button className="button is-bulma" id="shop now" onClick={() => >

          </button>
        </div>
    
        <div/>
      </div>
    </div>
  )
}