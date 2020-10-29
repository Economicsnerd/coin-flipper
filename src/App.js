import React, { Component } from 'react';
import CoinFlipper from './CoinFlipper';

class App extends Component {
  render() {
    return (
      <div className="App container text-center mt-5">
        <CoinFlipper />
      </div>
    );
  }
}

export default App;
