import {View, Text, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';

const index = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1, justifyContent: 'center'}}
        colors={Colors.splashColor}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#ffedde',
              justifyContent: 'center',
            }}>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </LinearGradient>
      <StatusBar backgroundColor={Colors.purple} />
    </SafeAreaView>
  );
};

export default index;
