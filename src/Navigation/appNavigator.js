import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome';
import Splash from '../Screens/Splash';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import RNBootSplash from 'react-native-bootsplash';
import OnBoarding from '../Screens/OnBoarding';
import BottomNav from './BottomNavigator';
import OneSignal from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const oneSignalNotification = async () => {
  const userData = await AsyncStorage.getItem('user');
  const getData = JSON.parse(userData);
  // console.log('ud -- >', getData.email);

  const ONESIGNAL_APP_ID = '5d061e91-0d9d-4b2c-baac-e5ca8d152254';

  OneSignal.setAppId(ONESIGNAL_APP_ID);

  OneSignal.promptForPushNotificationsWithUserResponse();

  OneSignal.setNotificationWillShowInForegroundHandler(
    notificationReceivedEvent => {
      console.log(
        'OneSignal: notification will show in foreground:',
        notificationReceivedEvent,
      );
      let notification = notificationReceivedEvent.getNotification();
      console.log('notification: ', notification);
      const data = notification.additionalData;
      console.log('additionalData: ', data);

      notificationReceivedEvent.complete(notification);
    },
  );

  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
  });
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  oneSignalNotification();
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
