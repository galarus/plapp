import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AboutModal from './AboutModal.js'
class PlantHeader extends Component<Props>{
    constructor(props){
        super(props);
    }
    render(){        
       return (
        <View style={{flex:1, margin: 10}}>

        <View style={{ 
            width: 500,
            position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around'}}>

<Text style={{fontSize: 25}}>PLAPP
</Text>   

 <AboutModal/>
    </View>
</View>
        )
    }
}

export default PlantHeader;