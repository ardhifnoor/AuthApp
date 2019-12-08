import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import firebase from 'firebase'

import Header from './src/components/common/Header'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
  componentWillMount(){
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDq7CvxETW2mHA_yF-uRDW_0Snt_WwIJBw",
      authDomain: "authapp-191208.firebaseapp.com",
      databaseURL: "https://authapp-191208.firebaseio.com",
      projectId: "authapp-191208",
      storageBucket: "authapp-191208.appspot.com",
      messagingSenderId: "630098130523",
      appId: "1:630098130523:web:9d32be6d0f616dacfb317e",
      measurementId: "G-BE0CVML84Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  render(){
    return(
      <SafeAreaView>
        <View>
          <Header title="Authentication"/>
          <LoginForm/>
        </View>
      </SafeAreaView>
    )
  }
}