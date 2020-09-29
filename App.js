import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image style={styles.assetImage} source={require('./assets/8MM.png')} />
          <Image style={styles.assetImage} source={require('./assets/CaliforniaLut.png')} />
        </View>
        <View style={styles.row}>
          <Image style={styles.assetImage} source={require('./assets/FilmBurns.png')} />
          <Image style={styles.assetImage} source={require('./assets/GrainPack.png')} />
        </View>
        <View style={styles.row}>
          <Image style={styles.assetImage} source={require('./assets/TapeDamage.png')} />
          <Image style={styles.assetImage} source={require('./assets/TextOverlays.png')} />
        </View>
        <View style={styles.row}>
          <Image style={styles.assetImage} source={require('./assets/Viewfinder.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  assetImage: {
    height: 180,
    width: 120,
    marginHorizontal: 20,
    marginVertical: 10,
  }
});
