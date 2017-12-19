/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  
} from 'react-native';


import MainPage from '../pages/MainPage'

export default class App extends Component {
  render() {
    return (
        <MainPage user={{name:'123', age:4}}/>
    );
  }
}
