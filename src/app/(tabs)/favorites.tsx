import { FlatList, View, TextInput, Text, StyleSheet } from "react-native";
import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function FavoritesScreen() {
  const [search, setSearch] = useState("default value");

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* header */}
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
          value={search}
          placeholder="flava for ya ear"
          style={styles.input}
        />
        <Text style={{ color: "white" }}>Cancel</Text>
      </View>

      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", padding: 5 },
  input: {
    flex: 1,
    backgroundColor: "#121314",
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
});
