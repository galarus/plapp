import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class SortIndicator extends Component<Props>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Text>
            {this.props.direction == 1  ? <Text> &#8593;</Text> : null }
            {this.props.direction == -1 ? <Text> &#8595;</Text> : null }
            </Text>
        )
    }
}
class ListHeaderCell extends Component<Props>{
    constructor(props){
        super(props);
       // console.log(this.props.item)
    }
    _toggleSort = (attr) => {
        //   console.log(ax)
           let newDirection = (this.props.direction == 0 || 
                               this.props.direction == -1 ||
                               this.props.sortAttr != attr) ? 1: -1;
           console.log("calling toggle sort from " + this.props.direction + " to " + newDirection);
           this.props.onSortChange(attr, newDirection);
       }
    render(){
        return (
        <TouchableHighlight 
        onPress={()=>this._toggleSort(this.props.attr)}
        style={styles.headercell}
    >
<Text>{this.props.title}

{this.props.attr==this.props.sortAttr ? 
<SortIndicator direction={this.props.direction}/> : null }
</Text>
</TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    headercell: {
    height:50,
    width:220,
    padding:5,
     borderWidth:1,
borderColor:'rgba(0,0,0,0.4)',
flex: 2},
})
export default ListHeaderCell;