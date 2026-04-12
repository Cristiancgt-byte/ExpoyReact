import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Inicio = () => (
  <View style={styles.screen}>
    <Text>Inicio</Text>
  </View>
);

const Lista = () => (
  <View style={styles.screen}>
    <Text>Lista</Text>
  </View>
);

const AcercaDe = () => (
  <View style={styles.screen}>
    <Text>Acerca de</Text>
  </View>
);

export default function App() {
  const [screen, setScreen] = useState('inicio');

  return (
    <SafeAreaView style={styles.container}>

      {screen === 'inicio' && <Inicio />}
      {screen === 'lista' && <Lista />}
      {screen === 'acerca' && <AcercaDe />}

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setScreen('inicio')} style={styles.btn}>
          <Text style={[styles.btnText, screen === 'inicio' && styles.active]}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('lista')} style={styles.btn}>
          <Text style={[styles.btnText, screen === 'lista' && styles.active]}>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('acerca')} style={styles.btn}>
          <Text style={[styles.btnText, screen === 'acerca' && styles.active]}>Acerca de</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  screen:    { flex: 1, alignItems: 'center', justifyContent: 'center' },
  menu:      { flexDirection: 'row', borderTopWidth: 1, borderColor: '#ddd' },
  btn:       { flex: 1, padding: 16, alignItems: 'center' },
  btnText:   { fontSize: 14, color: '#999' },
  active:    { color: '#000', fontWeight: 'bold' },
});