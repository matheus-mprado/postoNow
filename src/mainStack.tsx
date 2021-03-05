import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Constants from 'expo-constants';

import Home from './pages/Home';
import Filter from './pages/Filter';

const Stack = createStackNavigator();
const statusBarHeight = Constants.statusBarHeight;

export default function MainStack(){
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:'#f7f7f7',
                height:62+statusBarHeight,
            },
            headerTitleStyle:{
                fontWeight:'bold',
                fontSize:24,
                color:'#3c3f40',
                
            }
        }}
    >
        <Stack.Screen 
            name="Explore" 
            component={Home} 
            options={{
                title:"Explorar"
            }}
        />
        <Stack.Screen
            name="Filter" 
            component={Filter} 
            options={{
                title:"Filtro"
            }}
        />
    </Stack.Navigator>
  );
}
