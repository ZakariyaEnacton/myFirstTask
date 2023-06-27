import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CarouselView from '../../Component/Generic/Carousel';
import {Colors} from '../../Assets/Theme/colors';
import {style} from './style';

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
  console.log('list -- >', list);

  let listData = list.filter(item => item);

  console.log('listData -- >', listData);

  const removeToken = async () => {
    await AsyncStorage.getItem('user_token');
    await AsyncStorage.getItem('signUp_token');
    await AsyncStorage.multiRemove(['user_token', 'signUp_token']);
  };
  return (
    <View>
      <CarouselView
        data={listData}
        renderItem={({item}) => {
          switch (item) {
            case item['procash/slider']:
              return <Text>Hello</Text>;
          }
        }}
        itemWidth={350}
        sliderWidth={400}
      />
      <View>
        <Text style={{alignSelf: 'center', top: 400}}>Home</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            removeToken();
            props.navigation.navigate('Welcome');
          }}>
          <Text style={{alignSelf: 'center', top: 410}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, {})(Home);
