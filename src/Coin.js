import React, { Component } from 'react';
import './Coin.css';

export class Coin extends Component {
  render() {
    return (
      <div>
        <img
          className="img-thumbnail rounded mx-auto d-block"
          src={this.props.info.imgUrl}
          alt={this.props.info.side}
        />
      </div>
    );
  }
}

export default Coin;
