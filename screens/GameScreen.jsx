import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function GameScreen({ route, navigation }) {
  const { pokemon } = route.params;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => setPokemonData(data));
  }, []);

  if (!pokemonData) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: pokemonData.sprites.front_default }}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
});