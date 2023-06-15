import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('screen');

const Home = () => {
  return (
    <View>
      <Text style={{alignSelf: 'center', top: 400}}>Home</Text>
    </View>
  );
};

export default Home;
