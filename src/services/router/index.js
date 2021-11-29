import * as React from 'react';
import { createNativeStackNavigation } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const StackNavigation = createNativeStackNavigation();

const Router = () => {
  <StackNavigation.Navigator initialRouteName='Login'>
    <StackNavigation.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <StackNavigation.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </StackNavigation.Navigator>
}

export default Router;
