import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const assetRows = [
  [
    {
      image: require("../assets/8MM.png"),
      name: "8MM Film Mattes",
      price: "$10.00",
    },
    {
      image: require("../assets/CaliforniaLut.png"),
      name: "California LUT",
      price: "$10.00",
    },
  ],
  [
    {
      image: require("../assets/FilmBurns.png"),
      name: "Film Burns",
      price: "$10.00",
    },
    {
      image: require("../assets/GrainPack.png"),
      name: "Grain Pack",
      price: "$10.00",
    },
  ],
  [
    {
      image: require("../assets/TapeDamage.png"),
      name: "Tape Damage",
      price: "$10.00",
    },
    {
      image: require("../assets/TextOverlays.png"),
      name: "Text Overlays",
      price: "$10.00",
    },
  ],
  [
    {
      image: require("../assets/Viewfinder.png"),
      name: "Viewfinder",
      price: "$10.00",
    },
  ],
];

export default function HomeScreen({ navigation }) {
  const assets = assetRows.map((row, i) => (
    <View style={styles.assetsRow} key={i}>
      {row.map((asset, j) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() =>
            navigation.navigate("Details", {
              asset: asset,
            })
          }
          key={j}
        >
          <View style={styles.asset}>
            <Image style={styles.assetImage} source={asset.image} />
            <Text style={styles.assetText}>{asset.name}</Text>
            <Text style={styles.assetText}>{asset.price}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/film-refuge-logo.webp")}
        />
        {assets}
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
