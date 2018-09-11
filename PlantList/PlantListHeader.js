import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import ListHeaderCell from './ListHeaderCell.js'

class PlantListHeader extends Component<Props>{
    constructor(props){
        super(props);
    }

   /* _toggleSort = (attr) => {
     //   console.log(ax)
        let newDirection = (this.props.direction == 0 || this.props.direction == -1) ? 1: -1;
        console.log("calling toggle sort from " + this.props.direction + " to " + newDirection);
        this.props.onSortChange(attr, newDirection);
    }
*/
    render(){
       return (
           <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 1
            }}>

<ListHeaderCell title={"JEPSON CODE"} attr={"jepson_code"} {...this.props}/>
<ListHeaderCell title={"GENUS"} attr={"plant_genus"} {...this.props}/>
<ListHeaderCell title={"SPECIES"} attr={"plant_species"} {...this.props}/>

</View>
        )
    }
}

export default PlantListHeader;