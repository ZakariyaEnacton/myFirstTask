import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {style} from './style';

const Card = props => {
  // console.log('---- object ----', props.data);
  // let data = props.data;

  return (
    <View>
      <View style={style.card}>
        <Image
          resizeMode="contain"
          style={{height: 30, width: 60, left: 10, top: 20}}
          source={{uri: props.data.logo}}
        />
        <View style={{top: 20, left: 10}}>
          <Text style={{fontSize: 13}}>{props.data.name}</Text>
        </View>
        <View style={{left: 10, top: 25}}>
          <Text style={{fontSize: 10}}>{props.data.cashback_string}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
