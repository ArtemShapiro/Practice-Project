/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react'
// import 'jquery';
// import 'bootstrap';
 import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'

 import ToastAndroid from './app/modules'

 export default class PracticeProject extends Component {
   constructor (props) {
     super(props)
     this.state = {text: ''}
   }

   render () {
     let text
     if (this.state.text !== '') {
       text = <Text style={styles.container}>Hello, {this.state.text}!</Text>
     }

     return (
       <View style={{padding: 10}}>
         <TextInput
           style={{height: 40}}
           placeholder='Type your name'
           onChangeText={(text) => this.setState({text})}
        />
         {text}
         {ToastAndroid.show('Awesome', ToastAndroid.SHORT)}
       </View>
     )
   }
}

 const styles = StyleSheet.create({
   container: {
     padding: 10,
     fontSize: 42
   }
 })

 AppRegistry.registerComponent('PracticeProject', () => PracticeProject)
