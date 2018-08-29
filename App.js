/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import plant_data from './plapp_data.js';
var Datastore = require('react-native-local-mongodb')
  , db = new Datastore();

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      searchQueryObject: {},
      searchResults: []
    };
  }
  async componentDidMount(){
    let alldata = await db.insertAsync(plant_data);
    let results = await db.findAsync(this.state.searchQueryObject); 
    this.setState({searchResults: results});
    console.log(results.length);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{(db.adapter)}</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
  data={this.state.searchResults}
  renderItem={({item}) => <Text key={item.jepson_code}>{item.jepson_code}</Text>}
/>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 20
  }

});
