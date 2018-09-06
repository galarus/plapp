import React, {Component} from 'react';
import {Text, View, Button, Modal, TouchableHighlight, TextInput} from 'react-native';

class PlantSearch extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        }
    };
       // console.log(this.props.item)
    _setToDefault = () => {
        this.props.onFindChange({...this.props.findQuery, jepson_max: "", jepson_min: ""})
    console.log("setting to default")
    }
    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    } 
    render(){
        let findQuery = this.props.findQuery;
        console.log("rending with findQuery: "+findQuery);
       return (
           <View>
       

        <Button
        onPress={()=>{this._setModalVisible(true)}}
        title="Search"
        accessibilityLabel="narrow the list of plants"
        />
        </View>
        )
    }
}

export default PlantSearch;