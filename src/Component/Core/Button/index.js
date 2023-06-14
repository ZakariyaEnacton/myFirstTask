import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const ButtonPrimary = props => {
  return (
    <View>
      <TouchableOpacity
        style={[style.button, props.style]}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={style.btnText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;
