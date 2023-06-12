import {
  View,
  Text,
  Image,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppImages} from '../../Assets/Images';
import SwiperFlatList from 'react-native-swiper-flatlist';
import style from './style';

const slides = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ligula eget tortor cursus sodales. Mauris eu eros eu justo consequat scelerisque laoreet id elit.',
    image: AppImages.onboarding1,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ligula eget tortor cursus sodales. Mauris eu eros eu justo consequat scelerisque laoreet id elit.',
    image: AppImages.onboarding2,
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ligula eget tortor cursus sodales. Mauris eu eros eu justo consequat scelerisque laoreet id elit.',
    image: AppImages.onboarding3,
  },
];
const OnBoarding = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <SwiperFlatList
        data={slides}
        renderItem={({item}) => (
          <View style={style.container}>
            <Image source={item.image} style={style.image} />
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.description}>{item.description}</Text>
          </View>
        )}
        showPagination
        paginationStyle={{bottom: 40}}
        paginationStyleItem={{height: 8, width: 7}}
        paginationActiveColor="blue"
        onChangeIndex={({index, prevIndex}) => {
          {
            console.log(index, prevIndex);
          }
        }}
      />
      <TouchableOpacity
        onPress={index => console.log('index--------------', index)}>
        <Text
          style={{
            bottom: 30,
            alignSelf: 'flex-end',
            right: 40,
          }}>
          Next
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{bottom: 50, alignSelf: 'flex-start', left: 40}}>
        <Text>Prev</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
