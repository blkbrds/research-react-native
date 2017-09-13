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
  View,
  Image
} from 'react-native';

export default class ImageView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Image resizeMode="contain" style={{width: 300, height: 300, borderWidth: 1, borderRadius: 150}} source={ (require('./Bundles/truong.jpg'))} />
          <Image resizeMode="contain" style={{width: 300, height: 300, borderWidth: 1, borderRadius: 150}} source={ (uri('https://...ImageUrl'))} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});