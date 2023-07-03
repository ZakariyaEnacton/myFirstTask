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
            console.log(item['procash/slider']);
            switch (item['procash/slider']) {
              case item['procash/slider']:
                console.log(item['procash/slider'.style]);
                break;
              default:
                return null;
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
