import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import en from '../../../../translations/en.json';
import style from './style';

const ButtonLogin = () => {
  return (
    <View>
      <TouchableOpacity style={style.button}>
        <Text style={style.btnText}>{en.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLogin;
