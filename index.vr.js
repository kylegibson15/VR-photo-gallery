import React from 'react';
import {AppRegistry, View} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'IMG_0199.jpg',
    buttonImageSrc: 'IMG_0199.jpg'
  }, {
    key: 1,
    imageSrc: 'IMG_0493.jpg',
    buttonImageSrc: 'button-1363270_960_720.png'
  }, {
    key: 2,
    imageSrc: 'IMG_8190.jpg',
    buttonImageSrc: 'button-1363270_960_720.png'
  }, {
    key: 3,
    imageSrc: 'IMG_7705.jpg',
    buttonImageSrc: 'button-1363270_960_720.png'
  }
];

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = {
      src: 'IMG_0199.jpg'
    }
  }
  render() {
    return (<View>
      <Canvas src={this.state.src}/>
      <UI buttonConfig={Config} onClick={(key) => {
          this.setState({src: Config[key].imageSrc});
        }}/>
    </View>);
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
