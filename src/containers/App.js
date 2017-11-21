/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  
} from 'react-native';


import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

export default class App extends Component {
  render() {
    return (
        <MainPage user={{name:'123', age:4}}/>
    );
  }

  configureScene(route, routeStack) {
    if (route.sceneConfig) { // 有设置场景
        return route.sceneConfig;
    }
    return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
  }
  renderScene(route, navigator) {
    return <route.component {...route.passProps}/>;
  }
}
