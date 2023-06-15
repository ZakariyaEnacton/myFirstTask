import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../Screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';

const bottomTab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <bottomTab.Navigator screenOptions={{headerShown: false}}>
      <bottomTab.Screen
        name="Main"
        component={Home}
        options={{tabBarIcon: () => <Icon name="home" size={24} />}}
      />
    </bottomTab.Navigator>
  );
};

export default BottomNav;
