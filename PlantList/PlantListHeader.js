import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';


class PlantListHeader extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
           <View
           style={{padding:20}}>
<Text>JEPSON CODE</Text>
</View>
        )
    }
}
export default PlantListHeader;