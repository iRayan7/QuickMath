import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Mode1 from './Mode1';


const MainStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
    header: null,
    headerTitleStyle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 0,
      width: '100%',
      marginRight: 0,
      marginLeft: 0,
    },
    headerRight: (<View />) // To center the text, you have to put something fake in the header to shift the text on the right.
  }
},
Mode1: {
    screen: Mode1,
    navigationOptions: {
    header: null,
    headerTitleStyle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 0,
      width: '100%',
      marginRight: 0,
      marginLeft: 0,
    },
    headerRight: (<View />) // To center the text, you have to put something fake in the header to shift the text on the right.
  }
}
});

export default MainStack;
