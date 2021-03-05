import React from 'react';
import MainStack from './src/mainStack';

import { NavigationContainer } from '@react-navigation/native';
import { BreadProvider } from 'material-bread';

export default function App() {
  return (
    <BreadProvider>
    <NavigationContainer>
      
        <MainStack/>
      
    </NavigationContainer>
    </BreadProvider>
    
  );
}