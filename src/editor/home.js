import React, { Component } from 'react';
import start from '../img/work.svg';
import monkeyLottie from '../data/monkey.json';
import Lottie from 'react-lottie';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='text-center'>
        <h1 className='my-5 main-title'>bluemonkey</h1>

        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: monkeyLottie,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={250}
          width={250}></Lottie>
      </div>
    );
  }
}

export default Home;
