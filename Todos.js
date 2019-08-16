import React from 'react';
import { View, Text } from 'react-native'
import firebase from 'react-native-firebase';

class Todos extends React.Component {
  constructor() {
      super();
      this.ref = firebase.firestore().collection('todos');
  }

  render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Test</Text></View>
      )
  }
}

export default Todos;
