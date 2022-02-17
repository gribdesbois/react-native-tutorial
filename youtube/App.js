/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import {API_KEY} from @env
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, StyleSheet, Text, View } from 'react-native'
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import YoutubeVideo from './YoutubeVideo'
import env from 'react-native-dotenv'

const Stack = createStackNavigator()

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload, \n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload, \n' +
    'Shake or press menu button for dev menu',
})

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <View style={styles.container}>
            <Text style={styles.instructions}>Still working!</Text>
          </View>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

App.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
