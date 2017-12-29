import React, {Component} from 'react'
import './Video.css'

export default class Video extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--fence"></div>
          <div className="card__content">
            <div className="card__title">Flex</div>
            <p className="card__text"></p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
    )
  }
}
