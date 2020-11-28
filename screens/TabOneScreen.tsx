import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

/* import EditScreenInfo from '../components/EditScreenInfo'; */
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [state, setState] = useState("");

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Gestión de seguros </Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <SearchBar
    placeholder="Búsqueda..."
    onChangeText={setState}
    value={state}
    />
      {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
