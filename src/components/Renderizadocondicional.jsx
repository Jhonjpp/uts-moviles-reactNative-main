import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ExplicandoRendrizadoCondicional = () => {

  //este componente muestra un texto diciendo si el numero es mayor a 5 o no 
  const [numero, setNumero] = useState(9);
  const [mayor, setMayor] = useState(false);
  const [menor, setMenor] = useState(false);

 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    if(numero>5){
      console.log("es mayor a 5")
      setMayor(true)
    }else{
      console.log("es menor 5")
      setMenor(true)
    }
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

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
      <Text>Evaluar si numero es mayor a 5 app</Text>
      {mayor && <Text>numero es mayor a 5 </Text>}
      {menor && <Text>numero es menor a 5 </Text>}
    </View>
  );
};

export default ExplicandoRendrizadoCondicional