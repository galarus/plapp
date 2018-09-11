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
import PlantHeader from './PlantHeader/PlantHeader.js'
import PlantList from './PlantList/PlantList.js'
import PlantSearch from './PlantSearch/PlantSearch.js'

class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      plants: plant_data,
      findQuery: {
        jepson_min: "",
        jepson_max: ""
      },
      searchResults: plant_data
    };
  }

  _handleFindChange = (findQuery) => {
    //code to filter results from plants into search results
    let min = Number(findQuery.jepson_min);
    let max = isNaN(parseInt(findQuery.jepson_max, 10))? Number.MAX_SAFE_INTEGER: Number(findQuery.jepson_max)
    console.log("max "+max);
    let results = this.state.plants.filter((plant)=> {
      return plant.jepson_code >= min &&
            plant.jepson_code <= max;
    });

    //first filter jepson code range min then max
    console.log("handle find change from app component"+findQuery)
    this.setState({...this.state, findQuery: findQuery, searchResults: results});
  }
  render() {
    console.log("rendering app "+this.state.searchResults.length);
    return (
      <View style={styles.container}>
     <PlantHeader/>
      <View style={{flex:8, margin:18}}>
 
 
 {this.state.searchResults.length ?
 <PlantList searchResults={this.state.searchResults}
  key={this.state.searchResults.length}
 /> :
 <Text>There are no plants matching your given search criteria.</Text>
 }
      </View>
       <View style={{flex:5}}>
<PlantSearch plants={this.state.plants} findQuery={this.state.findQuery} onFindChange={this._handleFindChange}/>
       </View>
      </View>
    );
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
});

export default App;