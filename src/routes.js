import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName={Main}>
            <Stack.Screen name='Main' component={Main}/>
            <Stack.Screen name='NewEntry' component={NewEntry}/>
            <Stack.Screen name='Report' component={Report}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;