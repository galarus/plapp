
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';

class PlantListItem extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
           <View
           style={{padding:20}}>
<Text>{this.props.item.jepson_code}</Text>
</View>
        )
    }
}
class PlantList extends Component<Props> {
    constructor(props){
        super(props);
        //sorting will be stored in this state
        this.state = {
            renderedList: [], 
            offset: 0,
            refreshing: false
        };
        console.log(this.props.searchResults.length);

    }
    _updateList = () => {
        let { offset, renderedList } = this.state;
        let fullList = this.props.searchResults;
        let limit = offset + 15;
        console.log("updateList() " + offset + " try " + limit);
        if ( fullList.length >= limit ) {
            let newItems = fullList.slice(offset, limit);
            console.log("set state offset = " + limit)
            return new Promise((resolve) => {
                this.setState({
                    renderedList: renderedList.concat(newItems),
                    offset: limit
                }, () =>{
                    resolve() 
                })
            });
        }else {
            console.log("set state offset = " + fullList.length)
            return new Promise((resolve) => {
                this.setState({
                    renderedList: fullList,
                offset: fullList.length
                }, () =>{
                    resolve() 
                })
            });
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this._updateList().then(() => {
          this.setState({refreshing: false});
        });
      }
    componentDidMount(){
        console.log("platlist mounted")
        this._onRefresh();
    }
    
    render(){
return(
    <View>
        <FlatList
  data={this.state.renderedList}
  renderItem={({item}) => <PlantListItem item={item}/>}
  keyExtractor={(item)=> item.jepson_code.toString()}
  onEndReached={this._onRefresh}
            onEndReachedThreshold={0.1}
            refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
/>
        </View>
)
    }
}
export default PlantList;