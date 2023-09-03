import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ParcialMoviles = () => {

  const [numero, setNumero ] = useState(0)
  const [arrayprom, setArrayprom] = useState([]);
  const empleada = { }
  const [mostrarResultado, setMostrarResultado ] = useState(false);
  const [resultado, setResultado ] = useState(0);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const aggNumero = () => {
    console.log(numero)
    arrayprom.push(numero)
    setNumero(0)
    ToastAndroid.show('Se ha agrego:'+numero+", van: "+miArray, ToastAndroid.SHORT);
  }

  const promArray = () => {
    let total = parseInt(0);

    arrayprom.forEach((n) => {
      total = total + parseInt(n)
    })

    setResultado(total)
    setMostrarResultado(true);
    
    ToastAndroid.show('Se ha agregado el numero '+numero, ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>SUMAR ARRAY</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero} value={numero} placeholder="Numero 1" keyboardType="numeric" />

      <Button onPress={aggNumero} title="Agregar un número al array" color="#841584" />

      <Button onPress={promArray} title="Promedio" color="#FF0000" />

      {mostrarResultado && (<Text>El promedio del array es {resultado}</Text>)}


    </View>
  );
};

export default ParcialMoviles