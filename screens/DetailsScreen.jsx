import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {pokemonDetails && (
        <>
          <Text style={styles.title}>{pokemonDetails.name}</Text>
          <Image
            style={styles.image}
            source={{ uri: pokemonDetails.sprites.front_default }}
          />
          <Text style={styles.text}>PS: {pokemonDetails.stats[0].base_stat}</Text>
          <Text style={styles.text}>Ataque: {pokemonDetails.stats[1].base_stat}</Text>
          <Text style={styles.text}>Defensa: {pokemonDetails.stats[2].base_stat}</Text>
          <Text style={styles.text}>Ataque Especial: {pokemonDetails.stats[3].base_stat}</Text>
          <Text style={styles.text}>Defensa Especial: {pokemonDetails.stats[4].base_stat}</Text>
          <Text style={styles.text}>Velocidad: {pokemonDetails.stats[5].base_stat}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
