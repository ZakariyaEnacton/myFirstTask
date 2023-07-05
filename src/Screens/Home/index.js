import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CarouselView from '../../Component/Generic/Carousel';
import {style} from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
      {/* <View style={style.lgBtn}>
        <TouchableOpacity
          onPress={() => {
            removeToken();
            props.navigation.navigate('Welcome');
          }}>
          <Text style={{marginLeft: 8}}>LogOut</Text>
        </TouchableOpacity>
      </View> */}
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
                        <View>
                          <Image
                            source={{
                              uri: item.image_url.en,
                            }}
                            style={style.imgView}
                          />
                        </View>
                      );
                    }}
                  />
                );
              case 'procash/featured-stores':
                return (
                  <View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Text style={{textAlign: 'center', width: '30%'}}>
                        Top featured-stores
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/featured-stores'].categories}
                          renderItem={({item}) => {
                            return (
                              <View style={{justifyContent: 'center'}}>
                                <Text
                                  onPress={() => {
                                    console.log(item.name);
                                  }}
                                  style={{
                                    width: 100,
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <Card data={item['procash/featured-stores']} />
                    </View>
                  </View>
                );
              case 'procash/top-stores':
                return (
                  <View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          width: '30%',
                          verticalAlign: 'middle',
                        }}>
                        Top Stores
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/top-stores'].categories}
                          renderItem={({item}) => {
                            return (
                              <View style={{justifyContent: 'center'}}>
                                <Text
                                  onPress={() => {
                                    console.log(item.name);
                                  }}
                                  style={{
                                    width: 100,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <Card />
                    </View>
                  </View>
                );
              case 'procash/top-offers':
                return (
                  <View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          width: '30%',
                          verticalAlign: 'middle',
                        }}>
                        Top offers
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/top-offers'].categories}
                          renderItem={({item}) => {
                            return (
                              <View style={{justifyContent: 'center'}}>
                                <Text
                                  onPress={() => {
                                    console.log(item.name);
                                  }}
                                  style={{
                                    width: 100,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <Card />
                    </View>
                  </View>
                );
              case 'procash/top-deals':
                return (
                  <View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          width: '30%',
                          justifyContent: 'center',
                        }}>
                        Top deals
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/top-deals'].categories}
                          renderItem={({item}) => {
                            return (
                              <View style={{justifyContent: 'center'}}>
                                <Text
                                  onPress={() => {
                                    console.log(item.name);
                                  }}
                                  style={{
                                    width: 100,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <Card />
                    </View>
                  </View>
                );
              case 'procash/categories':
                return (
                  <View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          width: '30%',
                          verticalAlign: 'middle',
                        }}>
                        View Offers by Categories
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/categories'].categories}
                          renderItem={({item}) => {
                            return (
                              <View style={{justifyContent: 'center'}}>
                                <Text
                                  onPress={() => {
                                    console.log(item.name);
                                  }}
                                  style={{
                                    width: 100,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <Card />
                    </View>
                  </View>
                );
              default:
                null;
                break;
            }
          }}
        />
      </View>
    </View>
  );
};

export default connect(mapStateToProps, {})(Home);
