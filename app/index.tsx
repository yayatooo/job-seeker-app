import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [people, setPeople] = useState([
    { name: "yayat", key: "1" },
    { name: "dio", key: "2" },
    { name: "idam", key: "3" },
    { name: "Fajar", key: "4" },
    { name: "akbar", key: "5" },
    { name: "eca", key: "6" },
    { name: "fafan", key: "7" },
    { name: "aldi", key: "8" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 30,
    backgroundColor: "#fcd600",
    width: "100%",
    color: "#000",
    padding: 25,
    fontSize: 30,
    textAlign: "center",
  },
});
