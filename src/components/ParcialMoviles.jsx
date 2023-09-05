import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ParcialMoviles = () => {

  const [nombre, setNombre] = useState("");
  const [valor, setValor ] = useState(0);
  const [persona, setPersona] = useState([
    {
      nombre: 'arroz',
      valor: 10.000,
    }]);
  const [mostrarResultado, setMostrarResultado ] = useState(false);
  const [resultado, setResultado ] = useState(0);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const aggPersona = () => {
    console.log(nombre, valor)
    persona.push(nombre, valor)
    setPersona(0)
    ToastAndroid.show('Se ha agrego:'+nombre, ToastAndroid.SHORT);
  }

  const sumaArr = () => {
    let total = parseInt(0);

    persona.forEach((n) => {
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
      <Text>CUENTA DE COMPRAS</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNombre} value={nombre} placeholder="nombre" keyboardType="default" />

      <TextInput style={estilos.inputsTexto} onChangeText={setValor} value={valor} placeholder="valor" keyboardType="numeric" />

      <Button onPress={aggPersona} title="Agregar al array" color="#841584" />

      <Button onPress={sumaArr} title="Sumar valores" color="#FF0000" />

      {mostrarResultado && (<Text>El total es {resultado}</Text>)}


    </View>
  );
};

export default ParcialMoviles