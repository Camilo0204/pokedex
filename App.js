import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import MenuScreen from './screens/MenuScreen';
import GameScreen from './screens/GameScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Inicio🏠" component={MenuScreen} />
        <Stack.Screen name="Pokebola⛔" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Game🎮" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
