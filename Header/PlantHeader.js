import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AboutModal from './AboutModal.js'
import PlantSearch from './PlantSearch.js'
class PlantHeader extends Component<Props>{
    constructor(props){
        super(props);
        console.log(this.props.findQuery.jepson_min)
    }
    render(){        
       return (
        <View style={{flex:1}}>
        <View style={{flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }}>PLAPP</Text>

      <AboutModal/>
        </View>
        <PlantSearch {...this.props}/>
        </View>

        )
    }
}

export default PlantHeader;