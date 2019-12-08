import React, { Component } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import firebase from 'firebase'

import { Header, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
  state = {
    loggedIn: null,
    username: ''
  }
  
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
    firebase.initializeApp(firebaseConfig)

    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if(user){
          this.setState({ loggedIn: true, username: user.email })
          console.log(user)
        } else {
          this.setState({ loggedIn: false })
        }
      })
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return( 
          <View>
            <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
          </View>
        )
      case false:
        return <LoginForm/>
      default:
        return <Spinner/>
    }
  }
  
  render(){
    return(
      <SafeAreaView>
        <View>
          <Header title="Authentication"/>
          { this.renderContent() }
        </View>
      </SafeAreaView>
    )
  }
}