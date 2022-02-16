import React, { Component } from 'react';
import start from '../img/work.svg';
import monkeyLottie from '../data/monkey.json';
import Lottie from 'react-lottie';

function Home() {
  return (
    <div className='h-100'>
      <div className='row h-100 align-items-center'>
        <div className='col-md-6'>
          <div className='main-title-parent mx-auto'>
            <div className='monkey'>
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

            <div className='my-5 main-title'>bluemonkey</div>
          </div>
        </div>

        <div className='col-md-6'></div>
      </div>
    </div>
  );
}

export default Home;
