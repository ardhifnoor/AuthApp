import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'

import Header from './src/components/Header'

export default class App extends Component {
  render(){
    return(
      <SafeAreaView>
        <View>
          <Header title="Authentication"/>
        </View>
      </SafeAreaView>
    )
  }
}