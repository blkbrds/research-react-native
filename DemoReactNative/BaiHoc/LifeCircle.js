/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class ComponentLifeCircle extends Component {
    
        constructor(procs) {
            super(procs);
            console.log('constructor');
        }
    
        //Mounting
        componentWillMount() {
            console.log('componentWillMount');
        }
    
        render() {
            return (
            <View style={styles.container}>
                <Text> {this.props.currentTime} </Text>
            </View>
            );
        }
    
        componentDidMount() {
        console.log('componentDidMount');
        }
    
        //UpDating
        componentWillReceiveProps(nextProcs) {
            console.log('componentWillReceiveProps with next procs', nextProcs);
        }
    
        shouldComponentUpdate(nextProcs, nextState) {
            console.log('shouldComponentUpdate with next procs, next state', nextProcs, nextState);
            return true;
        }
    
        componentWillUpdate() {
            console.log('componentWillUpdate');
        }
    
        componentDidUpdate() {
            console.log('componentDidUpdate');
        }
    
        //Unmounting
        componentWillUnmount() {
            console.log('component will unmount')
        }    
}

export default class TestLifeCircle extends Component {
    constructor(procs) {
        super(procs);

        this.state = {
            isRemoved : false,
            currentTime : new Date().toLocaleTimeString()
        }

        setInterval( () => {
            this.setState({
                currentTime : new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    onToogleShowing = () => {

        this.setState({
            isRemoved : !this.state.isRemoved
        });
    }

    render() {

        const timerView = (!this.state.isRemoved) ? <ComponentLifeCircle currentTime={this.state.currentTime} /> : null;
        const btnTitle = (!this.state.isRemoved) ? 'Remove' : 'Show';

        return (
            <View style={styles.container}>
                {timerView}
                <Button onPress={ this.onToogleShowing } title={ btnTitle}/>
            </View>
        )
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