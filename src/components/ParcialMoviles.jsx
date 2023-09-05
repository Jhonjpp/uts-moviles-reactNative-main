import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ParcialMoviles = () => {

  const [nombre, setNombre] = useState("");
  const [valor, setValor ] = useState(0);
  const [personaArray, setPersonaArray] = useState([]);
  const [mostrarResul, setMostrarResul] = useState(false);
  const [resultado, setResultado ] = useState(0);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const aggArray = () => {
    const aggpersona = {nombre,valor};
    personaArray.push(aggpersona);
    setNombre("");
    setValor(0);
    console.log(aggpersona);
    //setPersonaArray(0);
    ToastAndroid.show('Se ha agrego un nuevo producto', ToastAndroid.SHORT);
  }

  const sumaArr = () => {
    let total = 0;
  
    personaArray.forEach((n) => {
      total += parseInt(n.valor);
    });
  
    setResultado(total);
    setMostrarResul(true);
    ToastAndroid.show(`El total de la compra es: ` + total, ToastAndroid.SHORT);
  };

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
      <Text>TIQUETE DE COMPRAS</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNombre} value={nombre} placeholder="nombre" keyboardType="default" />

      <TextInput style={estilos.inputsTexto} onChangeText={setValor} value={valor} placeholder="valor" keyboardType="numeric" />

      <Button onPress={aggArray} title="Agregar al array" color="#841584" />

      <Button onPress={sumaArr} title="Total compra" color="#FF0000" />

      {mostrarResul && (<Text>El total de la compra es: {resultado}</Text>)}


    </View>
  );
};

export default ParcialMoviles