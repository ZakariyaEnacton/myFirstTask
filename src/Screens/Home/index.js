import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const getData = async () => {
    const data = JSON.parse(await AsyncStorage.getItem('user'));
    console.log('data--->', data);
  };
  return (
    <View>
      <Button
        title="get"
        onPress={() => {
          getData();
        }}
      />
    </View>
  );
};

export default Home;
