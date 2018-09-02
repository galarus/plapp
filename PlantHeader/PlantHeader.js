import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

class PlantHeader extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
        let item = this.props.item;
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
        <TouchableOpacity
        onPress={()=>{alert("about")}}
        style={{
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         width:50,
         height:40,
         backgroundColor:'#f0ffff',
         borderRadius:40,
        }}
        ><Text>About</Text></TouchableOpacity>
        </View>
        <Button
        onPress={()=>{alert("search")}}
        title="Search"
        accessibilityLabel="narrow the list of plants"
        />
        </View>

        )
    }
}

export default PlantHeader;