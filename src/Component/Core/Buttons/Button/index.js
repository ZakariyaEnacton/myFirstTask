import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import en from '../../../../translations/en.json';
import style from './style';

const ButtonPrimary = props => {
  return (
    <View>
      <TouchableOpacity style={style.button}>
        <Text style={style.btnText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;
