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
        this.props.onFindChange({...this.props.findQuery, genus: "", species: ""})
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
              <Text>Genus:</Text>
<TextInput style={{borderColor: 'gray', borderWidth: 1}}
            value={findQuery.genus}
            onChangeText={(text)=>{this.props.onFindChange({...findQuery, genus: text}) }}
            keyboardType="default" />
                          <Text>Species:</Text>

<TextInput style={{borderColor: 'gray', borderWidth: 1}} 
value={findQuery.species}
onChangeText={(text)=>{this.props.onFindChange({...findQuery, species: text}) }}
keyboardType="default"
/>
             
            </View>
          </View>

        </View>
        )
    }
}

export default PlantSearch;