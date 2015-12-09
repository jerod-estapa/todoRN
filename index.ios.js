/**
 * React Native Tutorial To-Do App
 */

var React = require('react-native');

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} = React;

var Firebase = require('firebase');

class devdacticFirebase extends Component {
  //Your App Code
  constructor(props) {
    super(props);
    var myFirebaseRef = new Firebase('https://fiery-fire-1605.firebaseio.com');

    myFirebaseRef.set({
      title: "Hello World!",
      author: "Jerod",
      location: {
        city: "Fort Collins",
        state: "Colorado",
        zip: 80524
      }
    });
  }
}

var styles = StyleSheet.create({
  //Your App Style
});

AppRegistry.registerComponent('devdacticFirebase', () => devdacticFirebase);