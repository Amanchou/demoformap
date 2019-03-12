/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      latitude:'',
      longitude:''
    }
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(curr=>{
      console.log(curr)
      this.setState({
        latitude:curr.coords.latitude,
        longitude:curr.coords.longitude,
      })
    })
  }
  render() {
    return (
      <MapView
      style={{
        flex:1
      }}
      region={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // region={this.state.region}
      />

    );
  }
}


