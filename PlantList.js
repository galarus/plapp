
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

class PlantListItem extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
        console.log(this.props.item)
    }
    render(){
       return (
<Text>{this.props.item.jepson_code}</Text>
        )
    }
}
class PlantList extends Component<Props> {
    constructor(props){
        super(props);
        //sorting will be stored in this state
        this.state = {};
    }
    render(){
return(
    <View>
    <ScrollView>
        <FlatList
  data={this.props.searchResults}
  renderItem={({item}) => <PlantListItem item={item}/>}
  keyExtractor={(item)=> item.jepson_code.toString()}
/>
        </ScrollView>
        </View>
)
    }
}
export default PlantList;