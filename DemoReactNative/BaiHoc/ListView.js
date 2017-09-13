

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Image
} from 'react-native';

export default class ListViewDemo extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2', 'sss1', 'ssss2']),
      };
    }
  
    render() {
      return (
        <View style={{flex : 1, alignItems:  'center', justifyContent: 'center', marginTop: 100}}>
            <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        </View>
      );
    }
  }