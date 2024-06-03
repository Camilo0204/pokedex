import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_SIZE = 10;

export default function HomeScreen({ navigation }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchPokemonData(0);
  }, []);

  const fetchPokemonData = async (newOffset) => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(`${POKEMON_API_URL}?limit=${PAGE_SIZE}&offset=${newOffset}`);
      const data = await response.json();

      setPokemonData(data.results);
      setOffset(newOffset);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    fetchPokemonData(offset + PAGE_SIZE);
  };

  const handlePrevious = () => {
    if (offset - PAGE_SIZE >= 0) {
      fetchPokemonData(offset - PAGE_SIZE);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { pokemon: item })}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious} disabled={offset === 0}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  loading: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
