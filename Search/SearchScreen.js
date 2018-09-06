
import React, {Component} from 'react';
import {Text, View, Button, TouchableHighlight, TextInput} from 'react-native';
class SearchScreen extends Component<Props>{
render(){
    return (

          <View style={{margin: 50, padding: 50}}>
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
              <TouchableHighlight
                onPress={() => {
                  this._setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Return to Search Results</Text>
              </TouchableHighlight>
            </View>
          </View>
        )
    }
}
export default SearchScreen;