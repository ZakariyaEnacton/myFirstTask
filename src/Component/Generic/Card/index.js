import {View, Text} from 'react-native';
import React from 'react';

const Card = props => {
  console.log('props  --- >>> ', props);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#FDF4E6',
          height: 110,
          width: 150,
          borderRadius: 10,
        }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default Card;
