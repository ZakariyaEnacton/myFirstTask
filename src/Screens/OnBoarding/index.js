import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
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
const OnBoarding = ({navigation}) => {
  const [crrIndex, setCrrIndex] = useState(0);
  const refIndex = useRef(null);

  const handleNextScroll = () => {
    if (crrIndex != slides.length - 1) {
      refIndex.current.scrollToIndex({
        index: crrIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Welcome');
    }
  };

  const handlePrevIndex = () => {
    refIndex.current.scrollToIndex({
      index: crrIndex - 1,
      animated: true,
    });
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <SwiperFlatList
        ref={refIndex}
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
        onChangeIndex={({index}) => setCrrIndex(index)}
      />
      <View style={style.buttonWrapper}>
        <View style={style.btnNext}>
          <TouchableOpacity
            onPress={() => {
              handleNextScroll();
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        {crrIndex == 0 ? null : (
          <View style={style.btnPrev}>
            <TouchableOpacity
              onPress={() => {
                handlePrevIndex();
              }}>
              <Text>Prev</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnBoarding;
