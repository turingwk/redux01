import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import {
View,
Text,
Button,
StyleSheet,
TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {doLogin, loginSuccess} from '../actions/Login'

class MainPage extends BaseComponent {
  constructor() {
    super();
}
render() {
let tips;
let name = 'wk';
let age = '13';
if (this.props.user != null) {
name = this.props.user.name;
age = this.props.user.age;
}
if (this.props.status === 'init')
{
tips = '请点击登录';
}
else if (this.props.status === 'doing')
{
tips = '正在登录...';
}
else if (this.props.status === 'done' && !this.props.isSuccess)
{
tips = '登录失败, 请重新登录';
}
return (
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
<Text>{'姓名:' + name + '\n年龄:' + age }</Text>
<Text>{tips}</Text>
<TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
<Text style={{color: '#FFFFFF', fontSize: 20}}>登录</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLoginSuccess.bind(this)}>
<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
<Text style={{color: '#FFFFFF', fontSize: 20}}>重新登录</Text>
</View>
</TouchableOpacity>
</View>
);
}
handleLogin()
{
this.props.dispatch(doLogin());
}
handleLoginSuccess()
{
this.props.dispatch((loginSuccess(true, {
'name': 'admin',
'age': '24'
})));
}
}

function select(state)
{
return {
status: state.get('loginIn').get('status'),
isSuccess: state.get('loginIn').get('isSuccess'),
user: state.get('loginIn').get('user'),
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
});

export default connect(select)(MainPage);