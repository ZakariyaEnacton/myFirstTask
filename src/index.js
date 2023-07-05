import {View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import AppNavigator from './Navigation/appNavigator';
import Card from './Component/Generic/Card';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Card /> */}
      <AppNavigator />
    </View>
  );
};

export default App;
