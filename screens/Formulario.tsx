import React, {useState} from 'react';
import {TextInput, Button} from 'react-native';

import { Text, View } from '../components/Themed';
import {Poliza, Cobertura, Cobs, Percentage, Riesgo, modifica} from '../api';
import DateTimePicker from '@react-native-community/datetimepicker';
import SegmentedControl from '@react-native-community/segmented-control';

/**
 * crea un formulario para editar la póliza.
 * incluye un botón para reestablecer los valores, y uno para guardar.
 */
const Formulario = ({ item }: {item: Poliza}) => {
  // valores originales.
  const original = item;

  // estado actual de los campos.
  const [nombre, setNombre] = useState(item.nombre);
  const [descripcion, setDescripcion] = useState(item.descripcion);
  const [coberturas, setCoberturas] = useState(item.coberturas);
  const [fecha, setFecha] = useState(item.fecha);
  const [show, setShow] = useState(false);
  const [periodo, setPeriodo] = useState(item.periodo);
  const [precio, setPrecio] = useState(item.precio);
  const [riesgo, setRiesgo] = useState(item.riesgo);

  /**
   * Restaura los campos a sus valores originales.
   */
  const handleRestore = () => {
    setNombre(original.nombre);
    setDescripcion(original.descripcion);
    setCoberturas(original.coberturas);
    setFecha(original.fecha);
    setPeriodo(original.periodo);
    setPrecio(original.precio);
    setRiesgo(original.riesgo);
  }

  /**
   * Guarda los datos en la base de datos.
   */
  const handleSave = () => {
    modifica({
      id: original.id,
      nombre: nombre,
      descripcion: descripcion,
      coberturas: coberturas,
      fecha: fecha,
      periodo: periodo,
      precio: precio,
      riesgo: riesgo
    });
  }

  /**
   * modifica el valor de las coberturas en el sitio apropiado.
   */
  const modifyCob = (cobs: [Cobertura, Percentage][],
                     idx: number,
                     val: Cobertura | Percentage,
                     pos: number): [Cobertura, Percentage][] => {
    cobs[idx][pos] = val;
    return cobs;
  }

  /**
   * muestra el formulario y permite modificarlo.
   */
  return (
    <View>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          value={descripcion}
          onChangeText={setDescripcion}
        />

        {coberturas.map((_x, i) => (
          <>
              <SegmentedControl
                values={[Cobs[Cobertura.Terremoto], Cobs[Cobertura.Incendio],
                         Cobs[Cobertura.Robo], Cobs[Cobertura.Perdida],
                         Cobs[Cobertura.Vida], Cobs[Cobertura.Accidente]]}
                selectedIndex={coberturas[i][0]}
                onChange={(event) => setCoberturas(modifyCob(coberturas, Number(i), event.nativeEvent.selectedSegmentIndex as Cobertura, 0))}
              />
              <TextInput
                value={coberturas[i][1].toString()}
                onChangeText={(value) => setCoberturas(modifyCob(coberturas, Number(i), Number(value) as Percentage, 1))}
              />
          </>
        ))}

        <Button title="Seleccione la fecha" onPress={() => setShow(!show)} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(_event, selDate) => {
              const curDate = selDate || fecha;
              setFecha(curDate);
            }}
          />
        )}

        <TextInput
          value={periodo.toString()}
          onChangeText={(valor) => setPeriodo(Number(valor))}
        />

        <TextInput
          value={precio.toString()}
          onChangeText={(valor) => setPrecio(Number(valor))}
        />

        <Text>El tipo de riesgo debe corresponder a uno de los siguientes:
            "bajo", "medio", "medio-alto" o "alto". Si es algo diferente
            el valor no cambiará. </Text>
        <TextInput
          value={riesgo}
          onChangeText={(valor) => {
            if (["bajo", "medio", "medio-alto", "alto"].indexOf(valor) >= 0) {
              setRiesgo(valor as Riesgo);
            }
          }}
        />

        <Button title="Restaurar original" onPress={handleRestore}/>
        <Button title="Guardar" onPress={handleSave}/>
    </View>
  );
}

export default Formulario;
