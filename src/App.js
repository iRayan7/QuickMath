import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MainStack from './components/RootTabs';


export default class App extends Component {
  render() {
    // Root tabs is the navigator..
    return (
      <MainStack/>
    );
  }
}