import {View, Text} from 'react-native';
import React from 'react';

const Card = props => {
  console.log('props  --- >>> ', props.children.props);
  return (
    <View style={{height: 100}}>
      <Text>Hello</Text>
    </View>
  );
};

export default Card;
