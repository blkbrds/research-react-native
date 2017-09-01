/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FlexDemo extends Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow',
                    flex: 1,
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                    }}>
        <View style = {{width: 100, height: 100, backgroundColor: 'blue'}}></View>
        <View style = {{width: 100, height: 100, backgroundColor: 'red'}}></View>
      </View>
    );
  }
}

AppRegistry.registerComponent('FlexDemo', () => FlexDemo);
