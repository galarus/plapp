
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';
import PlantListItem from './PlantListItem.js'
import PlantListHeader from './PlantListHeader.js'
class PlantList extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            renderedList:[] , 
            offset: 0,
            refreshing: false,
            sortAttr: "jepson_code",
            direction: 0
        };
        console.log(this.props.searchResults.length);
    }
    _sortList = () => {
        if (this.state.direction == 1) {
            this.setState({...this.state, 
                renderedList: this.state.renderedList.sort(function(a, b){
                    return a.jepson_code - b.jepson_code})})
        }
        if (this.state.direction == -1) {
            this.setState({...this.state, 
                renderedList: this.state.renderedList.sort(function(a, b){
                    return b.jepson_code - a.jepson_code})})
        }    
    }
    _handleSortChange = (sortAttr, direction) => {
        console.log("handle sort change in PlantList component " + direction)
        this.setState({...this.state, sortAttr: sortAttr, direction: direction}, ()=>{
            this._sortList();
        });
      }     
    _updateList = () => {
        let { offset, renderedList } = this.state;
        let fullList = this.props.searchResults;
        let limit = offset + 20;
        console.log("updateList() " + offset + " try " + limit);
        if ( fullList.length >= limit ) {
            let newItems = fullList.slice(offset, limit);
            console.log("set state offset = " + limit)
            return new Promise((resolve) => {
                this.setState({
                    renderedList: renderedList.concat(newItems),
                    offset: limit
                }, () =>{
                    this._sortList()
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
                    this._sortList()
                    resolve() 
                })
            });
        }
    }
    _onRefresh = () => {
        return new Promise((resolve) => {

        this.setState({refreshing: true});
        this._updateList().then(() => {
                this.setState({
                    refreshing: false
                }, () =>{
                    resolve() 
                })
            });
        });
      }
    componentDidMount(){
        console.log("platlist mounted")
       this._onRefresh().then(() => {
           console.log("scroll plz");
         setTimeout(()=>this.flatList.scrollToIndex({index:19 , animated: false}), 1);
        }
       );
    }

    render(){
       
return(
    <View>
    <PlantListHeader
    direction={this.state.direction}
 sortAttr={this.state.sortAttr}
 onSortChange={this._handleSortChange}
 />
        <FlatList
        ref={flatList => this.flatList = flatList}
        inverted
        getItemLayout={(data, index) => (
  {length: 30, offset: 30 * index, index}
)}
  data={this.state.renderedList}
  renderItem={({item, index}) => <PlantListItem item={item}/>}
  keyExtractor={(item)=> item.jepson_code.toString()}
  onEndReachedThreshhold={0.5}
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