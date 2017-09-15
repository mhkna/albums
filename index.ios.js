// import library to help create component

import React from 'react';
//import textproperty from library
import { Text, AppRegistry } from 'react-native';


// create a component

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};


// render it to the device

AppRegistry.registerComponent('albums', () => App);
