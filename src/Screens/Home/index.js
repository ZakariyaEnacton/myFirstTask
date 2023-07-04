import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CarouselView from '../../Component/Generic/Carousel';
import {style} from './style';
import Card from '../../Component/Generic/Card';

const mapStateToProps = ({reducerImp}) => {
  return {
    dataList: reducerImp,
  };
};
const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request_all_data());
  }, []);

  let list = Object.values(props.dataList);

  const removeToken = async () => {
    await AsyncStorage.getItem('user_token');
    await AsyncStorage.getItem('signUp_token');
    await AsyncStorage.multiRemove(['user_token', 'signUp_token']);
  };

  return (
    <View>
      <View style={style.flatList}>
        <FlatList
          data={list}
          renderItem={({item}) => {
            const objData = Object.values(item);

            switch (objData[0].blockName) {
              case 'procash/section':
                return (
                  <View style={style.view}>
                    <Text style={style.text}>procash / section</Text>
                  </View>
                );
              case 'procash/slider':
                return (
                  <CarouselView
                    autoplay={true}
                    data={Object.values(item['procash/slider'].slides)}
                    sliderWidth={400}
                    itemWidth={350}
                    renderItem={({item}) => {
                      return (
                        <Image
                          source={{
                            uri: item.image_url.en,
                          }}
                          style={style.imgView}
                        />
                      );
                    }}
                  />
                );
              case 'procash/featured-stores':
                return (
                  <Card
                    data={item['procash/featured-stores'].categories}
                    renderItem={({item}) => {
                      console.log('item ---- >>>>', item);
                    }}
                  />
                  // <View style={style.view}>
                  //   <Text style={style.text}>procash / featured-stores</Text>
                  // </View>
                );
              case 'procash/top-stores':
                return (
                  <View style={style.view}>
                    <Text style={style.text}>procash/top-stores</Text>
                  </View>
                );
              case 'procash/top-offers':
                return (
                  <View style={style.view}>
                    <Text style={style.text}>procash/top-offers</Text>
                  </View>
                );
              case 'procash/top-deals':
                return (
                  <View style={style.view}>
                    <Text style={style.text}>procash/top-deals</Text>
                  </View>
                );
              default:
                null;
                break;
            }
          }}
        />
      </View>

      <View>
        <Text style={{marginLeft: 10}}>Home</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            removeToken();
            props.navigation.navigate('Welcome');
          }}>
          <Text style={{marginLeft: 8}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, {})(Home);
