import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const removeToken = async () => {
    await AsyncStorage.getItem('user_token');
    await AsyncStorage.getItem('signUp_token');
    await AsyncStorage.multiRemove(['user_token', 'signUp_token']);
  };
  return (
    <View>
      <View>
        <Text style={{alignSelf: 'center', top: 400}}>Home</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            removeToken();
            navigation.navigate('Welcome');
          }}>
          <Text style={{alignSelf: 'center', top: 410}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
