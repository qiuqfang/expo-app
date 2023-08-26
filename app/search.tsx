import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  TextInputProps,
} from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "components/Themed";
import { TextInput } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchChange: TextInputProps["onChange"] = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      console.log(e.nativeEvent);
      setSearchText(e.nativeEvent.text);
    },
    []
  );

  const handleSearchSubmit = useCallback(() => {
    console.log("search submit", searchText);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChange={handleSearchChange}
        ></TextInput>
        <View style={styles.searchBtn}>
          <Button title="搜索" onPress={handleSearchSubmit} />
        </View>
      </View>

      <Text>{searchText}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  searchInput: {
    color: "white",
    flex: 1,
  },
  searchBtn: {
    width: 60,
  },
});
