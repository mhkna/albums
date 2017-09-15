// import library to help create component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header.js';


// create a component

const App = () => {
  return (
    //(passing props) headerText can be named anything you'd like
    <Header headerText={'Albums'} />
  );
};


// render it to the device

AppRegistry.registerComponent('albums', () => App);
