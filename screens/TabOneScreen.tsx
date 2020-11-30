import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

/* import EditScreenInfo from '../components/EditScreenInfo'; */
import { Text, View } from '../components/Themed';
import { busqueda, Poliza } from '../api';

import styles from './TabOneScreen_styles';
import Formulario from './Formulario';


export default function TabOneScreen() {
  const [state, setState] = useState("");
  const [timer, setTimer] = useState(0);
  const [display, setDisplay] = useState<Poliza[]>([]);
  const [opened, setOpened] = useState("");

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
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Gestión de seguros </Text>
            <Text style={styles.description}>Busque las pólizas que desee revisar. </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
                <Pressable style={styles.item} onPress={() => setOpened(item.id)}>
                    <Text style={styles.title}>{item.nombre}</Text>
                    <Text style={styles.description}>{item.descripcion}</Text>
                    {opened === item.id
                    ? <Formulario item={item} />
                    : <Text></Text>}
                </Pressable>
              )}
            />
        </View>

    </ScrollView>
  );
}
