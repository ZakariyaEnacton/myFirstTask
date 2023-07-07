import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CarouselView from '../../Component/Generic/Carousel';
import {style} from './style';
import Card from '../../Component/Generic/Card';
import HomeHeader from '../../Component/Generic/HeaderHome';
import {Colors} from '../../Assets/Theme/colors';

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
                  <HomeHeader />
                  // <View style={style.view}>
                  //   <Text style={style.text}>procash / section</Text>
                  // </View>
                );
              case 'procash/slider':
                return (
                  <View
                    style={{
                      backgroundColor: Colors.midnight_Blue,
                      borderBottomRightRadius: 15,
                      borderBottomLeftRadius: 15,
                      height: 190,
                      paddingTop: 5,
                    }}>
                    <CarouselView
                      autoplay={true}
                      data={Object.values(item['procash/slider'].slides)}
                      sliderWidth={390}
                      itemWidth={380}
                      renderItem={({item}) => {
                        return (
                          <View>
                            <Image
                              // resizeMode="cover"
                              source={{
                                uri: item.image_url.en,
                              }}
                              style={style.imgView}
                            />
                          </View>
                        );
                      }}
                    />
                  </View>
                );
              case 'procash/featured-stores':
                return (
                  <View>
                    <View
                      style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                      <Text style={{textAlign: 'center', width: '30%'}}>
                        Top featured-stores
                      </Text>
                      <View style={{width: '70%'}}>
                        <FlatList
                          horizontal={true}
                          data={item['procash/featured-stores'].categories}
                          renderItem={({item}) => {
                            // console.log('object -- ', item);
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
                      <FlatList
                        horizontal={true}
                        data={
                          item['procash/featured-stores'].categories[0].stores
                        }
                        renderItem={({item}) => {
                          console.log('stores/featured-stores -- >', item);
                          // return item.name === 'Handpicked'
                          //   ? item.stores
                          //   : null;
                          // const objItem = item;
                          // console.log('objItem --- >', Object.values(objItem));
                          return (
                            <Card data={item} />
                            //   // <FlatList
                            //   //   horizontal={true}
                            //   //   data={item.stores}
                            //   //   renderItem={({item}) => {
                            //   //     return <Card>{item}</Card>;
                            //   //   }}
                            //   // />
                          );
                        }}
                      />
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
                      <FlatList
                        horizontal={true}
                        data={item['procash/top-stores'].categories[0].stores}
                        renderItem={({item}) => {
                          console.log('stores/top-stores -- >', item);
                          // const objItem = item;
                          // console.log('objItem --- >', Object.values(objItem));
                          return (
                            <Card data={item} />
                            // <FlatList
                            //   horizontal={true}
                            //   data={item.stores}
                            //   renderItem={({item}) => {
                            //     return <Card>{item}</Card>;
                            //   }}
                            // />
                          );
                        }}
                      />
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
                      <FlatList
                        horizontal={true}
                        data={item['procash/top-offers'].categories[1].coupons}
                        renderItem={({item}) => {
                          console.log('stores/top-offers -- >', item);
                          // const objItem = item;
                          // console.log('objItem --- >', Object.values(objItem));
                          return (
                            <Card data={item.store} />
                            // <FlatList
                            //   horizontal={true}
                            //   data={item.stores}
                            //   renderItem={({item}) => {
                            //     return <Card>{item}</Card>;
                            //   }}
                            // />
                          );
                        }}
                      />
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
                      <FlatList
                        horizontal={true}
                        data={item['procash/top-deals'].categories[0].deals}
                        renderItem={({item}) => {
                          console.log('stores/top-deals -- >', item.store);
                          // const objItem = item;
                          // console.log('objItem --- >', Object.values(objItem));
                          return (
                            <Card data={item.store} />
                            // <FlatList
                            //   horizontal={true}
                            //   data={item.stores}
                            //   renderItem={({item}) => {
                            //     return <Card>{item}</Card>;
                            //   }}
                            // />
                          );
                        }}
                      />
                    </View>
                  </View>
                );
              // case 'procash/categories':
              //   return (
              //     <View>
              //       <View
              //         style={{
              //           flex: 1,
              //           flexDirection: 'row',
              //         }}>
              //         <Text
              //           style={{
              //             textAlign: 'center',
              //             width: '30%',
              //             verticalAlign: 'middle',
              //           }}>
              //           View Offers by Categories
              //         </Text>
              //         <View style={{width: '70%'}}>
              //           <FlatList
              //             horizontal={true}
              //             data={item['procash/categories'].categories}
              //             renderItem={({item}) => {
              //               return (
              //                 <View style={{justifyContent: 'center'}}>
              //                   <Text
              //                     onPress={() => {
              //                       console.log(item.name);
              //                     }}
              //                     style={{
              //                       width: 100,
              //                       textAlign: 'center',
              //                     }}>
              //                     {item.name}
              //                   </Text>
              //                 </View>
              //               );
              //             }}
              //           />
              //         </View>
              //       </View>
              //       <View style={{margin: 10}}>
              //         <FlatList
              //           horizontal={true}
              //           data={item['procash/categories'].categories}
              //           renderItem={({item}) => {
              //             console.log('stores -- >', item);
              //             // const objItem = item;
              //             // console.log('objItem --- >', Object.values(objItem));
              //             return (
              //               <Card data={item} />
              //               // <FlatList
              //               //   horizontal={true}
              //               //   data={item.stores}
              //               //   renderItem={({item}) => {
              //               //     return <Card>{item}</Card>;
              //               //   }}
              //               // />
              //             );
              //           }}
              //         />
              //       </View>
              //     </View>
              //   );
              default:
                null;
                break;
            }
          }}
        />
      </View>
      <View style={{backgroundColor: 'red', height: 50}}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, {})(Home);
