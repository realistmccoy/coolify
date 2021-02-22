import React from 'react';
import { withRouter} from 'react-router-dom'
import studioBag from '../../assets/2169842.svg'
import './main-section.styles.scss'

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src="studioBag"/>
        </div>
      </div>
    </div>
  )
}