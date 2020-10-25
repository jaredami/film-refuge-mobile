import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function DetailsScreen({ route, navigation }) {
  const { asset } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/film-refuge-logo.webp")}
        />
        <View>
          <Image style={styles.assetImage} source={asset.image} />
          <Text style={styles.assetName}>{asset.name}</Text>
          <Text style={styles.assetPrice}>{asset.price}</Text>
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
    alignSelf: "center",
    marginVertical: 20,
    width: "80%",
  },
  assetImage: {
    alignSelf: "center",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  assetName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  assetPrice: {
    alignSelf: "center",
    fontSize: 20,
  },
});

export default DetailsScreen;
