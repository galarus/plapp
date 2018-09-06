import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';


class PlantListItem extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
        let item = this.props.item;
       return (
           <View
           style={{height:30}}>
<Text>{item.jepson_code} {item.plant_genus} {item.plant_species}</Text>
</View>

        )
    }
}
export default PlantListItem;