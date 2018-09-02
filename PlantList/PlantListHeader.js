import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';


class PlantListHeader extends Component<Props>{
    constructor(props){
        super(props);
    }
    _toggleSort = () => {
        console.log("")
        let newDirection = (this.props.direction == 0 || this.props.direction == -1) ? 1: -1;
        console.log("calling toggle sort from " + this.props.direction + " to " + newDirection);
        this.props.onSortChange("jepson_code", newDirection);
    }
    render(){
        
       return (
           <TouchableHighlight 
           onPress={this._toggleSort}
           style={{borderWidth:1,
       borderColor:'rgba(0,0,0,0.4)'
       }}>
           <View
           style={{padding:15}}>
<Text>JEPSON CODE 
{ this.props.direction==1 ? <Text> &#8593;</Text>:null } 
{ this.props.direction==-1 ? <Text> &#8595;</Text>:null } 
</Text>

</View>
</TouchableHighlight>
        )
    }
}
export default PlantListHeader;