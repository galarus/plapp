/**
 * Plant App
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home/HomeScreen.js';
import SearchScreen from './Search/SearchScreen.js';


const RootStack = createStackNavigator({
  Home:  HomeScreen,
  Search: SearchScreen,
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}