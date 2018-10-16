import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { TextInput, TouchableOpacity } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
const store = createStore(allReducers);

import PageOne from './src/screens/PageOne';
import PageTwo from './src/screens/PageTwo';

export default class App extends React.Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="PageOne" component={PageOne} title="PageOne"  initial={true}/>
          <Scene key="PageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}