import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../../Assets/Theme/colors';
import {style} from './style';

const Card = props => {
  console.log('---- object ----', props.data);
  // let data = props.data;

  return (
    <View>
      <View style={style.card}></View>
    </View>
  );
};

export default Card;
