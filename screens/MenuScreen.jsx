import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function MenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/poke.jpeg')} // Ruta a la imagen local
      style={styles.background}
    >
      <View style={styles.container}>
        <CustomButton
          title="Mis Pokémons"
          onPress={() => navigation.navigate('Pokebola⛔')}
        />
        <CustomButton
          title="Vista del juego"
          onPress={() => navigation.navigate('Game🎮', { pokemon: { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" } })}
        />        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Esto asegura que la imagen cubra toda la pantalla
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(255, 255, 255, 0.5)', // Color de fondo semitransparente
  },
});

