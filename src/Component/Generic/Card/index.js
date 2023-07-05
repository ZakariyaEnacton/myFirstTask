import {View, Text, FlatList} from 'react-native';
import React from 'react';

const Card = props => {
  let data = Object.values(props);
  console.log('props  --- >>> ', data);

  return (
    <View>
      <View
        style={{
          backgroundColor: 'lightblue',
          height: 110,
          width: 150,
          borderRadius: 10,
        }}>
        <FlatList
          data={props}
          renderItem={({item}) => {
            return <Text>{item}</Text>;
          }}
        />
      </View>
    </View>
  );
};

export default Card;
