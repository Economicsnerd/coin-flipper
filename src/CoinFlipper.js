import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

export class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgUrl:
          'https://upload.wikimedia.org/wikipedia/en/6/6c/Toonie_-_back.png',
      },
      {
        side: 'tails',
        imgUrl:
          'https://lh3.googleusercontent.com/proxy/ylLxOgFtGUdwA1GVmfB5oIUx0v1SC4iIIrFGVDD2CMoHQyEgOrbLYm7PfAPkFPYin8kQ5773LhGqCfz6mYdRJjeLUa78mz9DQlT9k9p6BO7KKW78XFqDReiWwszOdtj6huj4F8ERvWiCqbE',
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      let newState = {
        ...st,
        currentCoin: newCoin,
        nFlips: st.nFlips + 1,
      };
      newCoin.side === 'heads'
        ? (newState.nHeads += 1)
        : (newState.nTails += 1);
      return newState;
    });
  }

  handleClick(event) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h2>Flip this coin!</h2>

        <button
          className="btn btn-outline-danger mt-3 mb-3"
          onClick={this.handleClick}
        >
          Flip Coin
        </button>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <p className="mt-4">
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
