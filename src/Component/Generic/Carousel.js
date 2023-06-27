import {View} from 'react-native';
import React from 'react';
import {Carousel} from 'react-native-snap-carousel';

const CarouselView = props => {
  return (
    <View>
      <Carousel {...props} />
    </View>
  );
};

export default CarouselView;
