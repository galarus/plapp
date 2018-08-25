import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import plant_data from './plapp_data.js';

var Datastore = require('nedb')
  , db = new Datastore();
db.insert(plant_data, function(err, newDocs){
	//console.log(newDocs);
})
class App extends Component {
  componentWillMount() {
  	db.find({plant_genus: "Cotoneaster"}, function (err, docs){
  		console.log(docs);
  	})
  }
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload. omg
        </Text>
      </View>
    );
  }
}

export default App;
