import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {style} from './style';
import {Colors} from '../../../Assets/Theme/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

const HomeHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <View>
          <Text style={style.txt}>Welcome to</Text>
          <Text style={[style.txt, {fontSize: 18, fontWeight: '700'}]}>
            Laraback Pro
          </Text>
        </View>
        <View>
          <Text style={[style.txt]}>$ 0.0</Text>
        </View>
      </View>
      <View style={style.searchSection}>
        <Icon name="search" size={24} style={style.icon} />
        <TextInput
          placeholder="Search Cashback, Stores,Categories"
          placeholderTextColor={Colors.Silver}
          style={style.txtInp}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
