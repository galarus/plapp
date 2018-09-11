import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';

class AboutModal extends Component<Props>{
    constructor(props){
        super(props);
        this.state = { modalVisible: false};
       // set to false for debugging
    }
    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    } 
    render(){
       return (
           <View>
             <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{margin: 50, padding: 50, justifyContent:'space-between'}}>
            <View>
              <Text>Welcome to Plapp</Text>
                <View>
                    <Text>About The App...</Text>
                </View>
              <TouchableOpacity
                onPress={() => {
                  this._setModalVisible(!this.state.modalVisible);
                }} style={{backgroundColor:'red'}}>
                <Text>Enter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
        onPress={()=>{this._setModalVisible(true)}}
        style={{
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         width:50,
         height:40,
         backgroundColor:'#f0ffff',
         borderRadius:40        }}><Text>About</Text>
        </TouchableOpacity>
</View>
        )
    }
}

export default AboutModal;