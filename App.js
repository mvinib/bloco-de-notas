import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Login';
import Home from './src/Home';


const rota = createStackNavigator();
  
export default function routes(){
  return(
    <NavigationContainer>
      <rota.Navigator initialRouteName='Login'>
        
        <rota.Screen 
        name="Login"
        component={Login}
        options={{headerShown:false}}
        
        />
        <rota.Screen name="Home"
         component={Home}
         options={{headerShown:false}}
         
         />
        
      </rota.Navigator>
    </NavigationContainer>
  )
  
};




