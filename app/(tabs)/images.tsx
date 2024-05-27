import { Alert, Button, Image, StyleSheet } from "react-native";

import { Text, View } from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Image as ExpoImage } from "expo-image";

export default function ImagesScreen() {
  const handleClick = () => {
    Alert.alert("提示", "点击了按钮");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>图片</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Button title="点击" onPress={handleClick} />
        {/* <ExpoImage
          style={styles.image}
          source="https://reactnative.dev/img/tiny_logo.png"
        /> */}

        <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: "80%",
  },
  image: {
    width: 50,
    height: 50,
  },
});
