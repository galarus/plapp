import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';


class PlantListHeader extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            sort: ""
        };
       // console.log(this.props.item)
    }
    _toggleSort = () => {
        (this.state.sort == "" || this.state.sort == "desc") ?
        this.setState({sort: "asc"}) :
        this.setState({sort: "desc"});
    }
    render(){
        
       return (
           <TouchableHighlight onPress={this._toggleSort}>
           <View
           style={{padding:20}}>
<Text>JEPSON CODE 
{ this.state.sort=="asc" ? <Text> &#8593;</Text>:null } 
{ this.state.sort=="desc" ? <Text> &#8595;</Text>:null } 
</Text>

</View>
</TouchableHighlight>
        )
    }
}
export default PlantListHeader;