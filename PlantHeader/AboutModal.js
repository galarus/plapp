import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class AboutModal extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
        let item = this.props.item;
       return (
        <View style={{flex:1}}>
        </View>

        )
    }
}

export default AboutModal;