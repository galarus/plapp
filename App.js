/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import plant_data from './plapp_data.js';

import PlantList from './PlantList/PlantList.js'
var Datastore = require('react-native-local-mongodb')
  , db = new Datastore();

class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      findQuery: {},
      searchResults: []
    };
  }
  _handleFindChange = (findQuery) => {
    this.setState({...this.state, findQuery: findQuery});
  }
  async componentDidMount(){
   
    let results = await db.findAsync(this.state.findQuery);
          //  .sort(this.state.sortObj) ; 
    this.setState({...this.state, searchResults: results});
    //console.log(this.props.plants.length);
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
<Text style={styles.welcome}>THIS IS A HEADERRR</Text>
      </View>
      <View style={{flex:4, margin:18}}>
 
 
 {this.state.searchResults.length ?
 <PlantList 
 searchResults={this.state.searchResults}/>:
 <Text>There are no plants matching your given search criteria.</Text>}
      </View>
       
      </View>
    );
  }
}

class DataBaseProvider extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={ plants: [] };
  }
  async componentDidMount(){
    let alldata = await db.insertAsync(plant_data);
    this.setState({plants: alldata});
    //console.log(this.state.plants.length)
  }
  render(){
    return (this.state.plants.length ? <App plants={this.state.plants} /> : null);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
export default DataBaseProvider;