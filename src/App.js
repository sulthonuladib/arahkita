import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Router from './services/router';
// import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}


export default App;
