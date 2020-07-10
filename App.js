
import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Recents from './screens/Recents';

const Tab = createMaterialBottomTabNavigator();

const App = () => {

    return (
     <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        style={{backgroundColor: '#000'}}
        barStyle={{backgroundColor: '#0f0f0f', padding:4 }}

        >
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: (
              <Icon name="home" color="#000" size={24} /> ),
          }}
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
           tabBarLabel: 'Profile',
           tabBarIcon: (
            <Icon name="home" color="#000" size={24} /> ),
          }}
          />
          <Tab.Screen 
          name="Recents" 
          component={Recents} 
          options={{
            tabBarLabel: 'Recents',
            tabBarIcon: (
            <Icon name="home" color='white' size={24} /> ),
          }}
          />
      </Tab.Navigator>
     </NavigationContainer>
);
}
const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
