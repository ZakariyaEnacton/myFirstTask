import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request_all_data} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';

const mapStateToProps = ({reducer}) => {
  return {
    dataList: reducer.stores,
  };
};
const Home = props => {
  const dispatch = useDispatch();
  // const props.dataList = useSelector(state => state.stores);

  useEffect(() => {
    dispatch(request_all_data());
  }, []);
  console.log('in component -- >', props);

  const removeToken = async () => {
    await AsyncStorage.getItem('user_token');
    await AsyncStorage.getItem('signUp_token');
    await AsyncStorage.multiRemove(['user_token', 'signUp_token']);
  };
  return (
    <View>
      {props.dataList?.length
        ? props.dataList.map(items => <Text>{console.log(items)}</Text>)
        : null}
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
