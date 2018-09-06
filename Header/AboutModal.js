import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class AboutModal extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
        <TouchableOpacity
        onPress={()=>{alert("about")}}
        style={{
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         width:50,
         height:40,
         backgroundColor:'#f0ffff',
         borderRadius:40,
        }}><Text>About</Text>
        </TouchableOpacity>

        )
    }
}

export default AboutModal;