import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ExplicacionuseState = () => {

  const [nombre, setNombre] = useState("Pedro");

 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const cambiarnombre = () => {
    setNombre(Margarita);
    ToastAndroid.show('Se cambio el nombre', ToastAndroid.SHORT);
    
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
      <Text>Persona app</Text>
      <Text>{nombre}</Text>
      <Button onPress={cambiarnombre} title="cambiarnombre" color="#841584" />
    </View>
  );
};

export default ExplicacionuseState