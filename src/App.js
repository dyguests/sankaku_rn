/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import MainScreen from "./ui/main/MainScreen";

const App = createStackNavigator({
    Home: {screen: MainScreen},
    // Profile: {screen: ProfileScreen},
});

export default App;