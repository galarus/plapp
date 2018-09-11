import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal, TouchableHighlight, TextInput} from 'react-native';

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
       
          <View style={{margin: 5, padding: 5}}>
            <View>
            <Button
        onPress={this._setToDefault}
        title="Set To Default"
        accessibilityLabel="set the search criteria to the default values"
        />
              <Text>Jepson code range:</Text>
<TextInput style={{borderColor: 'gray', borderWidth: 1}}
            value={findQuery.jepson_min}
            onChangeText={(text)=>{this.props.onFindChange({...findQuery, jepson_min: text}) }}
            keyboardType="numeric" />
<TextInput style={{borderColor: 'gray', borderWidth: 1}} 
value={findQuery.jepson_max}
onChangeText={(text)=>{this.props.onFindChange({...findQuery, jepson_max: text}) }}
keyboardType="numeric"
/>
             
            </View>
          </View>

        </View>
        )
    }
}

export default PlantSearch;