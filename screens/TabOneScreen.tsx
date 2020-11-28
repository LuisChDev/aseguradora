import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

/* import EditScreenInfo from '../components/EditScreenInfo'; */
import { Text, View } from '../components/Themed';
import { busqueda, poliza } from '../api';


export default function TabOneScreen() {
  const [state, setState] = useState("");
  const [timer, setTimer] = useState(0);
  const [display, setDisplay] = useState<poliza[]>([]);

  /**
   * realiza la búsqueda una vez el usuario haya terminado de escribir.
   */
  const handleChange = (cadena: string) => {
    // change the state of the app
    setState(cadena);
    // cambia el valor del timer, borra el viejo y plantea uno nuevo.
    window.clearTimeout(timer);
    let timr = window.setTimeout(() => {
      let resultados = busqueda(state);
      setDisplay(resultados);
    }, 500);
    setTimer(timr);
  }

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.title}>Gestión de seguros </Text>
            <Text style={styles.description}>Busque las pólizas que desee revisar. </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
        </View>
        <SearchBar
          placeholder={"Búsqueda..."}
          onChangeText={handleChange}
          value={state}
          style={styles.bar}
        />
        <View>
            <FlatList
              data={display}
              renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item.nombre}</Text>
                    <Text style={styles.description}>{item.descripcion}</Text>
                </View>
              )}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  bar: {
    flexGrow: 4,
  },
  item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
