import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const ButtonPrimary = props => {
  return (
    <View>
      <TouchableOpacity style={style.button} onPress={props.onPress}>
        <Text style={style.btnText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;