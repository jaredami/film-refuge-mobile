import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/film-refuge-logo.webp")}
        />
        <View style={styles.assetsRow}>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/8MM.png")}
            />
            <Text style={styles.assetText}>8MM Film Mattes</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/CaliforniaLut.png")}
            />
            <Text style={styles.assetText}>California LUT</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
        </View>
        <View style={styles.assetsRow}>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/FilmBurns.png")}
            />
            <Text style={styles.assetText}>Film Burns</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/GrainPack.png")}
            />
            <Text style={styles.assetText}>Grain Pack</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
        </View>
        <View style={styles.assetsRow}>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/TapeDamage.png")}
            />
            <Text style={styles.assetText}>Tape Damage</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/TextOverlays.png")}
            />
            <Text style={styles.assetText}>Text Overlays</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
        </View>
        <View style={styles.assetsRow}>
          <View style={styles.asset}>
            <Image
              style={styles.assetImage}
              source={require("../assets/TapeDamage.png")}
            />
            <Text style={styles.assetText}>Viewfinder</Text>
            <Text style={styles.assetText}>$10.00</Text>
          </View>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginVertical: 20,
    width: "80%",
  },
  assetsRow: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  asset: {
    width: 120,
    margin: 20,
  },
  assetImage: {
    height: 180,
    width: 120,
    marginBottom: 5,
  },
  assetText: {
    fontWeight: "bold",
  },
});
