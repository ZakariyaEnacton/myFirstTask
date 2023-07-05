import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CarouselView from '../../Component/Generic/Carousel';
import {style} from './style';
import Card from '../../Component/Generic/Card';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{textAlign: 'center', width: '30%'}}>
                      Top featured-stores
                    </Text>
                    <View style={{width: '70%'}}>
                      <FlatList
                        horizontal={true}
                        data={item['procash/featured-stores'].categories}
                        renderItem={({item}) => {
                          // console.log('object == ', item);
                          console.log('object[0] == >>', item.stores[3]);
                          return (
                            <View style={{justifyContent: 'center'}}>
                              <TouchableOpacity
                                onPress={() => (
                                  <View style={{height: 100}}>
                                    <Text>Hello</Text>
                                  </View>
                                )}>
                                <Text
                                  style={{
                                    width: 110,
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                );
              case 'procash/top-stores':
                return (
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
                      Top Stores
                    </Text>
                    <View style={{width: '70%'}}>
                      <FlatList
                        horizontal={true}
                        data={item['procash/top-stores'].categories}
                        renderItem={({item}) => {
                          return (
                            <View style={{justifyContent: 'center'}}>
                              <TouchableOpacity
                                onPress={() => {
                                  console.log(item.name);
                                }}>
                                <Text
                                  style={{
                                    width: 110,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                );
              case 'procash/top-offers':
                return (
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
                      Top offers
                    </Text>
                    <View style={{width: '70%'}}>
                      <FlatList
                        horizontal={true}
                        data={item['procash/top-offers'].categories}
                        renderItem={({item}) => {
                          return (
                            <View style={{justifyContent: 'center'}}>
                              <TouchableOpacity
                                onPress={() => {
                                  console.log(item.name);
                                }}>
                                <Text
                                  style={{
                                    width: 110,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                );
              case 'procash/top-deals':
                return (
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
                              <TouchableOpacity
                                onPress={() => {
                                  console.log(item.name);
                                }}>
                                <Text
                                  style={{
                                    width: 110,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                );
              case 'procash/categories':
                return (
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
                      procash/categories
                    </Text>
                    <View style={{width: '70%'}}>
                      <FlatList
                        horizontal={true}
                        data={item['procash/categories'].categories}
                        renderItem={({item}) => {
                          return (
                            <View style={{justifyContent: 'center'}}>
                              <TouchableOpacity
                                onPress={() => {
                                  console.log(item.name);
                                }}>
                                <Text
                                  style={{
                                    width: 110,
                                    textAlign: 'center',
                                  }}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
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
