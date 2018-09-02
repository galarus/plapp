
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, RefreshControl} from 'react-native';
class PlantListHeader extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
           <View
           style={{padding:20}}>
<Text>JEPSON CODE</Text>
</View>
        )
    }
}
class PlantListItem extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
       // console.log(this.props.item)
    }
    render(){
       return (
           <View
           style={{height:30}}>
<Text>{this.props.item.jepson_code}</Text>
</View>
        )
    }
}
class PlantList extends Component<Props> {
    constructor(props){
        super(props);
        //sorting will be stored in this state
     //   let fullList =this.props.searchResults;
      //  let limit
      //  if (fullList.length >= 15)
      //  let initialList = fullList.length >= 15 ? 
        //                fullList.slice(0, 15)
          //              :   

        this.state = {
            renderedList:[] , 
            offset: 0,
            refreshing: false
        };
        console.log(this.props.searchResults.length);

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
    <PlantListHeader/>
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