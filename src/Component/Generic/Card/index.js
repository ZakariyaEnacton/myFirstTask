import {View, Text} from 'react-native';
import React from 'react';

const Card = props => {
  console.log('props  --- >>> ', props);
  return (
    <View style={{height: 100}}>
      <Text>{console.log(props.data)}</Text>
    </View>
  );
};

export default Card;
