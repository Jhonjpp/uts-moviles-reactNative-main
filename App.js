import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SumarArray from "./src/components/SumarArray.jsx";
import Calculadora from "./src/components/Calculadora.jsx";
//import ExplicacionuseState from "./src/components/ExplicandoseState.jsx";
import ExplicandoRendrizadoCondicional from './src/components/Renderizadocondicional.jsx';
import ParcialMoviles from './src/components/ParcialMoviles.jsx';
import EvaluarArray from './src/components/EvaluarArray';
import AgregarNumsMayores10 from "./src/components/AggregarNumsArr";
import MostrarDatosMySQL from "./src/components/MostrarDatosMySQL";



export default function App() {
  
  return (
    <View style={estilos.container}>
      <ParcialMoviles/>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#White',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
