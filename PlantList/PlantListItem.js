import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';


class PlantListItem extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
           <View
           style={{height:30}}>
<Text>{this.props.item.jepson_code}</Text>
</View>
        )
    }
}
export default PlantListItem;