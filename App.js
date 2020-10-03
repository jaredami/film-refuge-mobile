import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          resizeMode={'contain'}
          source={require('./assets/film-refuge-logo.webp')} />
        <View style={styles.assetsRow}>
          <Image style={styles.assetImage} source={require('./assets/8MM.png')} />
          <Image style={styles.assetImage} source={require('./assets/CaliforniaLut.png')} />
        </View>
        <View style={styles.assetsRow}>
          <Image style={styles.assetImage} source={require('./assets/FilmBurns.png')} />
          <Image style={styles.assetImage} source={require('./assets/GrainPack.png')} />
        </View>
        <View style={styles.assetsRow}>
          <Image style={styles.assetImage} source={require('./assets/TapeDamage.png')} />
          <Image style={styles.assetImage} source={require('./assets/TextOverlays.png')} />
        </View>
        <View style={[styles.assetsRow, styles.assetsRowLast]}>
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
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
    width: '80%'
  },
  assetsRow: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  assetImage: {
    height: 180,
    width: 120,
    margin: 20,
  }
});
