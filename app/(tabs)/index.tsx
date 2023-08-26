import { StyleSheet } from "react-native";

import { Text, View } from "components/Themed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>首页</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
