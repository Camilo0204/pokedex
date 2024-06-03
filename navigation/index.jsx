import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menú Principalll' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokebola' }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ title: '¿Quién es este pokemón?' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
